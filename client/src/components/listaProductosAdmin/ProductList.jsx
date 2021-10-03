import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import getAllProducts from '../../stateManagement/actions/getAllProducts';
import TablaList from './TablaList';


export default function ProductosLista(){

    const dispatch = useDispatch();
  
    
    useEffect(() => {
      dispatch (getAllProducts());   
    }, [dispatch]);

    const products = useSelector(state => state.productsReducer.products);

    function headers (){
        return (

            <tr>                 
                <th className="table__th">Name</th>
                <th className="table__th">Policy</th>
                <th className="table__th">Stock</th>
                <th className="table__th">Insert image</th>
                <th className="table__th">Update Product</th>
                <th className="table__th">Vew detail</th>
                <th className="table__th">Delete Product</th>
            </tr>
        )
    };

    function bodyTable (){
        return (

            products.map((e,i)=>{
                return(
                  <tr   key={i}  className="table-row table-row--chris">
                    <input value = {e.id} hidden/>
                  <td  className="table-row__td">
                  <div className="table-row__info">
                    <p className="table-row__name">{e.name}</p>
                   
                  </div>
                </td>
                <td  data-column="Policy" className="table-row__td">
                <div className="">
                  <p className="table-row__policy">${e.price}</p>
                 
                </div>                
              </td>
              <td  data-column="Policy status" className="table-row__td">
                <p className="table-row__p-status status--green status">{e.stock}</p>
              </td>
             

              <td  className="table-row__td">
               <p><i className="fas fa-trash-alt fa-2x"></i></p>
               
              </td>
              <td  className="table-row__td">
             <Link to = '/'> <p><i className="fas fa-pencil-alt  fa-2x"></i></p> </Link>

               
              </td>
              <td  className="table-row__td">
               <p><i className="fas fa-trash-alt fa-2x"></i></p>
               
              </td>

              <td   className="table-row__td">
               <p><i className="fas fa-trash-alt fa-2x"></i></p>
               
              </td>
              </tr>
                )


               })
        )
    }
    
     
    console.log("pr",products.length);


    return (
        <TablaList 
            title={"Porducts"}
            headers={headers()}
            data={products}
            bodyTable={bodyTable()}
        />
    )
}