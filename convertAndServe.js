const fs = require('fs');
const path = require('path');
const express = require('express');
const csv = require('csv-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const jsonDir = path.join(__dirname, 'public/data');
if (!fs.existsSync(jsonDir)){
    fs.mkdirSync(jsonDir, { recursive: true });
}

let filesProcessed = 0;
const totalFiles = 4; // Number of CSV files

// Convert CSV files to JSON
const convertCsvToJson = (filePath) => {
  const jsonData = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      jsonData.push(row);
    })
    .on('end', () => {
      const jsonFileName = path.basename(filePath, path.extname(filePath)) + `.json`;
      fs.writeFileSync(path.join(jsonDir, jsonFileName), JSON.stringify(jsonData, null, 2));
      console.log(`Converted ${filePath} to ${jsonFileName}`);
      filesProcessed += 1;

      // Once all files are processed, merge them
      if (filesProcessed === totalFiles) {
        mergeAndServe();
      }
    });
};

// List of CSV files
const csvFiles = [
  'D:/Downloads/archive/AnnualValue.csv',
  'D:/Downloads/archive/Countries_Trade_Ranks.csv',
  'D:/Downloads/archive/Total_Trade.csv',
  'D:/Downloads/archive/Countrywise_Trade_Analysis_1988-2021.csv'
];

// Convert each CSV file to JSON
csvFiles.forEach(filePath => convertCsvToJson(filePath));

// Merge and serve JSON data
const mergeAndServe = () => {
  const file1 = JSON.parse(fs.readFileSync(path.join(jsonDir, 'AnnualValue.json')));
  const file2 = JSON.parse(fs.readFileSync(path.join(jsonDir, 'Countries_Trade_Ranks.json')));
  const file3 = JSON.parse(fs.readFileSync(path.join(jsonDir, 'Total_Trade.json')));
  const file4 = JSON.parse(fs.readFileSync(path.join(jsonDir, 'Countrywise_Trade_Analysis_1988-2021.json')));

  let combinedData = [...file1, ...file2, ...file3, ...file4];

  // Write combined data to JSON
  fs.writeFileSync(path.join(jsonDir, 'combined.json'), JSON.stringify(combinedData, null, 2));
  console.log('Combined data written to combined.json');

  // Serve combined data using Express
  app.use(express.static('public'));

  app.get('/data/combined.json', (req, res) => {
    res.sendFile(path.join(jsonDir, 'combined.json'));
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};