import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartComponentProps {
  chartData: any; // 建议为chartData提供更具体的类型
  options: any; // 建议为options提供更具体的类型
}

const LineChartComponent = ({
  chartData,
  options,
}: LineChartComponentProps) => {
  return <Line data={chartData} options={options} />;
};

export default LineChartComponent;
