import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LegendItem,
  ChartEvent,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TradeDataItem {
  date: string;
  tradeValue: number;
}

interface ChartProps {
  data: TradeDataItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Trade Value ($)',
        data: data.map((item) => item.tradeValue),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        onClick: (e: ChartEvent, legendItem: LegendItem) => {
          return false; 
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          maxRotation: 45,
          minRotation: 0,
          font: {
            size: 12,
          },
        },
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      y: {
        ticks: {
          callback(value: string | number) {
            return `$${typeof value === 'number' ? value.toLocaleString() : parseFloat(value).toLocaleString()}`;
          },
          font: {
            size: 12,
          },
        },
        title: {
          display: true,
          text: 'Trade Value ($)',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div style={{ height: '500px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
