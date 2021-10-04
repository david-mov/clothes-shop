import {useDispatch,useSelector} from 'react-redux';
import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {getAllCategories} from '../../../stateManagement/actions/getAllCategories';
import TablaList from './ListTable';
import './styles.css'




export default function CategoryList() {

    const dispatch = useDispatch();  
    const [currentPage, setCurrentPage] = useState(0)
    const [actualCurrent, setactualCurrent] = useState(1)
    var countP = 5
    const nextPage = () => {
      if (totalCurrent !== actualCurrent) {
        setactualCurrent(actualCurrent + 1)
        setCurrentPage(currentPage + countP)
      }
    }
  
    const prevPage = () => {
      if (actualCurrent > 1) {
        setactualCurrent(actualCurrent - 1)
        setCurrentPage(currentPage - countP)
      }
    }
    
    useEffect(() => {
      dispatch (getAllCategories());  
    }, [dispatch]);

    const categorys = useSelector(state => state.categoriesReducer.categories);
    var totalCurrent = Math.ceil(categorys.length / countP)

    function headers (){
        return (

            <tr>                 
                <th className="table__th">Name</th>
                <th className="table__th">Update Category</th>
                <th className="table__th">Delete Category</th>
            </tr>
        )
    };

    function bodyTable (){
        return (

            categorys.map((e,i)=>{
                return(
                    <tr   key={i}  className="table-row table-row--chris">
                    <input value = {e.id} hidden/>
                    <td  className="table-row__td">
                    <div className="table-row__info">
                        <p className="table-row__name">{e.name}</p>
                    
                    </div>
                    </td>
                    
                    <td  className="table-row__td">
                    <Link to = '/'> <p><i className="fas fa-pencil-alt  fa-2x"></i></p> </Link>               
                    </td>
                    <td   className="table-row__td">
                    <p><i className="fas fa-trash-alt fa-2x"></i></p>               
                    </td>
                    </tr>
                )
            })
        )
    };

    
    console.log("pr",categorys);
    return (
      <div>
        <div className='body'>
        <TablaList 
            title={"Categorys"}
            headers={headers()}
            data={categorys}
            bodyTable={bodyTable()}
        />
        </div>
        <div className='buttonList'>
        <button className="button2" onClick={prevPage}>
        PREV
      </button>
   
    <h1>
      {actualCurrent} De {totalCurrent}
    </h1>
   
      <button className="button2" onClick={nextPage}>
        NEXT
      </button>
   
      </div>
  </div>
    )
    
}