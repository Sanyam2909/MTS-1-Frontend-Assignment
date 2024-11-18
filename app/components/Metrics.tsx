import React from 'react';

interface TradeDataItem {
  date: string;
  tradeValue: number;
}

interface MetricsProps {
  data: TradeDataItem[];
}

const Metrics: React.FC<MetricsProps> = ({ data }) => {
  const totalTradeValue = data.reduce((acc, item) => acc + item.tradeValue, 0);
  const averageTradeValue = data.length ? totalTradeValue / data.length : 0;

  return (
    <div className="metrics-container flex flex-wrap space-x-4">
      <div className="p-4 bg-gray-200 rounded-lg shadow w-full md:w-1/3">
        <h3 className="text-lg font-semibold">Total Trade Value</h3>
        <p className="text-xl font-bold">${totalTradeValue.toLocaleString()}</p>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg shadow w-full md:w-1/3">
        <h3 className="text-lg font-semibold">Average Trade Value</h3>
        <p className="text-xl font-bold">${averageTradeValue.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Metrics;
