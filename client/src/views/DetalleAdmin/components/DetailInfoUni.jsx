import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../../../styles/styleInformes.css'
import { useSelector } from "react-redux";
const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'Cout Views',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [12, 40, 25, 27, 30, 50, 32],
    },
    {
      type: 'bar',
      label: 'Cout Rating',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [0, 49, 65, 20, 40, 15, 10],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'line',
      label: 'Total Stars',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [2, 3, 4, 2, 5, 5, 5],
    },
  ],
});

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,

      },
      title: {
        display: true,
        text: 'REPORT PRODUCT'
      },
      // legend: {
      //     display: true,
      // }
    },
  
};



export default function InformeProducto () {
  var { productViewsUsers } = useSelector((state) => state.productsReducer);
  console.log("datat desde ",productViewsUsers )
    const { productId } = useParams();
    const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" dataInfiUni">      
      <Bar data={data} options={options} />   
    </div>
  );

}