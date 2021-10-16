import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../stateManagement/actions/getAllUsers";




const SuperAdminPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {   
        dispatch(getAllUsers());
    }, [dispatch]);

    const {users} = useSelector((state) => state.userReducer);

    console.log("data ", users)

    return (
      <div>
        
      </div>
    );
  };
  
  export default SuperAdminPage;