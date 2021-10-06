import './styles.css';
import { Link } from 'react-router-dom';
export default function TablaList({title, headers, data, bodyTable,url}){
    
 
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
            <Link to = {url}><button className='button2'>CREAR {title}</button ></Link>
              <table className="table">
               
                  {headers}
               

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