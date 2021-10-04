import './styles.css';
import { Link } from 'react-router-dom';
export default function TablaList({title, headers, data, bodyTable}){
    

    return(
      
        <div className="container1">
        <div className="row row--top-40">
          <div className="col-md-12">
            <h2 className="row__title">Total {title} {data.length}</h2>
          </div>
        </div>
        <div className="row row--top-20">
          <div className="col-md-12">
            <div className="table-container">
            <Link to = '/create'><button className='button2'>CREAR PRODUCTO</button ></Link>
              <table className="table">
                <thead className="table__thead">
                  {headers}
                </thead>

                <tbody className="table__tbody">                  
                  {bodyTable}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
       
      </div>
      
    )
}