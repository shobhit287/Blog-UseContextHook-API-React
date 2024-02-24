import { useContext} from "react";
import { AppContext } from "../hooks/AppContext";
import './footer.css';

function Footer(){
    const {page,totalPage,handlePageChange}=useContext(AppContext);

    return(
        <div className="footer_section">
       {
        page===1?(<>
        <div className="page1">
        <button onClick={()=>{handlePageChange(page+1)}}>Next</button>
        </div>
        <div className="page_count">
            <p>Page {page} of {totalPage}</p>
        </div>
        </>):(page===totalPage?(<><button onClick={()=>{handlePageChange(page-1)}}>Previous</button> <div className="page_count">
            <p>Page {page} of {totalPage}</p>
        </div></>):(<>
        <div className="page_1">
        <button onClick={()=>{handlePageChange(page-1)}}>Previous</button> 
        <button onClick={()=>{handlePageChange(page+1)}}>Next</button>
        </div>
        <div className="page_count">
            <p>Page {page} of {totalPage}</p>
        </div>
        </>))
       }

        </div>
    )
}
export default Footer;