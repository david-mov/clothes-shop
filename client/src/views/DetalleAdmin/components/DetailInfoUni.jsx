import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../../../styles/styleInformes.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getAllViews} from "../../../stateManagement/actions/getAllViews";
import { getAllRating } from "../../../stateManagement/actions/getAllRating";
const rand = () => Math.floor(Math.random() * 255);

/*const genData = () => ({

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
});*/
/*
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
*/


export default function InformeProducto () {

  const { productId } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllViews())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllRating())
  }, [dispatch])

  const {productViews} = useSelector(state => state.productsReducer)
  const showProductViews = productViews.filter((e) => e.View_product == productId);
  var objFechaViews = showProductViews.map((e) => e.createdAt);

  const { productRatingsUsers } = useSelector((state) => state.productsReducer);
  const showproductRatingsUsers = productRatingsUsers.filter((e) => e.View_product == productId);
  var objFechaRating = showProductViews.map((e) => e.createdAt);

  const fechasUni = objFechaRating.concat(objFechaViews);
  const filterFechas = [...fechasUni]
 
 console.log("gtttt", filterFechas)
//   var dia  = objFecha.getDate();
// var mes  = objFecha.getMonth();
// var anio = objFecha.getFullYear();
  const genData = () => ({

  
    labels: filterFechas,
    // ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
        label: 'Average Rating',
        backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        data: [10, 50, 20, 80, 100, 10, 40],
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