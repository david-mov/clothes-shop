import { useState } from 'react';
import '../../../styles/stylePaginator.css';

export default function Paginator({ totalPages }) {
    
    const [pageIni, setpageIni] = useState(1);
    

    const next = () => {
        setpageIni(pageIni + 1);

    }

    const prev = () => {
        setpageIni(pageIni - 1);
    }

    const show = () => {
        if (pageIni === 1) {
            return (
                <div className="pagination">
                    <p className="pagination-item active">{prev}</p>
                    <p>TO</p>
                    <p className="pagination-item ">{totalPages}</p>
                    <p className="pagination-item " onClick={next}>next</p>
                </div>
            )
        } else if (pageIni >= totalPages) {

            return (
                <div className="pagination">
                    <p className="pagination-item " onClick={prev}>prev</p>
                    <p className="pagination-item active">{pageIni}</p>
                    <p>TO</p>
                    <p className="pagination-item ">{totalPages}</p>
                </div>
            )
        } else {

            return (
                <div className="pagination">
                    <p className="pagination-item " onClick={prev}>prev</p>
                    <p className="pagination-item active">{pageIni}</p>
                    <p>TO</p>
                    <p className="pagination-item ">{totalPages}</p>
                    <p className="pagination-item " onClick={next}>next</p>
                </div>
            )
        }
    }

    return (
        <>
        { show()} 
        </>
    )
}





