import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../../../styles/styleInformes.css'
const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'bar',
      label: 'cout view',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [12, 40, 25, 27, 30, 50, 32],
    },
    {
      type: 'bar',
      label: 'cout raiting',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [0, 49, 65, 20, 40, 15, 10],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'line',
      label: 'Total stars',
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
      },
      title: {
        display: true,
        text: 'Inform Product'
      },
      legend: {
          display: true,
      }
    },
  
};



export default function InformeProducto () {
    

    const { productId } = useParams();
    console.log("toma el id", productId)
    const [data, setData] = useState(genData());

  useEffect(() => {
    const interval = setInterval(() => setData(genData()), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" dataInfiUni">
      <div className='header'>
      <h2 className='title'>Id Product</h2>
      <h3 className='title'>id</h3>
      <h2 className='title'>Name Product</h2>
      <h3 className='title'>name</h3>
      <h2 className='title'>Date Created</h2>
      <h3 className='title'>date</h3>
      <h2 className='title'>Last Update</h2>
      <h3 className='title'>date</h3>
      <h2 className='title'>Product Status</h2>
      <h3 className='title'>state</h3>        
      </div>
      <Bar data={data} options={options} />   
    </div>
  );

}