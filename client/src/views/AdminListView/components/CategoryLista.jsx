import {useDispatch,useSelector} from 'react-redux';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import getAllCategories from '../../stateManagement/actions/getAllCategories';
import TablaList from './TablaList';




export default function CategoryList() {

    const dispatch = useDispatch();  
    
    useEffect(() => {
      dispatch (getAllCategories());  
    }, [dispatch]);

    const categorys = useSelector(state => state.categoriesReducer.categories);

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
        <TablaList 
            title={"Categorys"}
            headers={headers()}
            data={categorys}
            bodyTable={bodyTable()}
        />

    )
    
}