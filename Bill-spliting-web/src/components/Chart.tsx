import { useEffect, useState } from "react"
import { Data } from "./data"
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, registerables } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale,PointElement)
const LineCharty = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

 const options={
  plugins:{
    legend:true
  },
  scales:{
    y:{
      // min:3,
      // max:3
    }
  }

 }


  return (<div>
    <Line className="my-4 w-100" data={chartData} />
  </div>)
}

export default LineCharty;