import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpdate } from "../../stateManagement/actions/CleanPutUpdate";
import { useParams } from "react-router";
import { useUserId } from "../../hooks/useUserId";
import { getUserDetail } from "../../stateManagement/actions/getUserDetail";
import UpdateCheckout from "./../FormCrudView/components/Update/UpdateCheckout";



const UpdateCheckoutView = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  let [idCookie, idOk] = useUserId()

  let idFinal = idCookie?.id
  

  console.log("IDDDD",idFinal)

  useEffect(() => {
    dispatch(getUserDetail(id));
    return () => {
      dispatch(cleanUpdate());
    };
  }, [dispatch, id]);

  const user = useSelector((state) => state.userReducer.userDetails);

  const formulario = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <UpdateCheckout
          name={user.user.name} 
          id = {id}
          email = {user.user.email}
          address = {user.address}
          nacionality = {user?.nacionality}
          sex = {user.sex}
          location = {user.location}
          documentType = {user.documentType}
          numberDocument = {user.numberDocument}
          birthDate = {user.birthDate}
          phone = {user.user.phone}
        />
      );
    }
  };

  return <div>{formulario()}</div>;
};

export default UpdateCheckoutView;


