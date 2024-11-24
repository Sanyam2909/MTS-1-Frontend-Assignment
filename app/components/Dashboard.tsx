'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Metrics from './Metrics';
import Chart from './Chart';

interface TradeDataItem {
  date: string;
  tradeValue: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<TradeDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get<TradeDataItem[]>('/combined.json');
        const rawData: TradeDataItem[] = response.data.map((item: any) => ({
          date: item.Year,
          tradeValue: item.AnnualTradeValue
            ? parseFloat(item.AnnualTradeValue.replace(/,/g, ''))
            : 0,
        }));

        // Aggregate data by year
        const aggregatedData: Record<string, TradeDataItem> = {};
        rawData.forEach((item) => {
          if (aggregatedData[item.date]) {
            aggregatedData[item.date].tradeValue += item.tradeValue;
          } else {
            aggregatedData[item.date] = { ...item };
          }
        });

        const formattedData = Object.values(aggregatedData).sort(
          (a, b) => parseInt(a.date, 10) - parseInt(b.date, 10)
        );
        setData(formattedData);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Trade Data Dashboard
      </h1>
      <Metrics data={data} />
      <div className="mt-6">
        <Chart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
