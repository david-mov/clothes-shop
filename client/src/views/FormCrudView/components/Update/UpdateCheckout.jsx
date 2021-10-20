import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserDetails } from "../../../../stateManagement/actions/getAllUserDetails";
import { useHistory } from "react-router-dom";
import Select from "react-select";
<<<<<<< HEAD:client/src/views/CheckoutPayment/Checkout.jsx

=======
import { putUserDetail } from "../../../../stateManagement/actions/putUserDetail";
>>>>>>> a4a82c5825d56d9c429c76bff986d7252cebdd7f:client/src/views/FormCrudView/components/Update/UpdateCheckout.jsx


const UpdateCheckout = ({
  name,
  id,
  email,
  address,
  nacionality,
  phone,
  data,
  sex,
  location,
  documentType,
  numberDocument,
  birthDate,

}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {

    dispatch(getAllUserDetails());
  }, [dispatch]);

  let users = useSelector((state) => state.userReducer.allUserDetails);

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const [valueSex, setValueSex] = useState({
    value: sex, label: capitalize(sex)
  });

  const [valueDocumentType, setValueDocumentType] = useState({
    value: documentType, label: capitalize(documentType)
  })

  const [input, setInput] = useState({
    name,
    email,
    phone,
    address,
    nacionality,
    sex: valueSex.value,
    location,
    documentType: valueDocumentType.value,
    numberDocument,
    birthDate,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const optionSex = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },

  ]

  const onSelectChangeSex = (e) => {
    setInput({
      ...input,
      sex: e.value,
    });

    setValueSex(e);
  };

  const optionDocumentType = [
    { value: "dni", label: "DNI" },
    { value: "passport", label: "Passport" },
  ]

  const onSelectChangeDocumentType = (e) => {
    setInput({
      ...input,
      documentType: e.value,
    });

    setValueDocumentType(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:client/src/views/CheckoutPayment/Checkout.jsx
    let numbersDocument = users.map((e) => e.numberDocument);
    //BUSCO SI HAY ALGUNA CATEGORIA QUE ESTE REPETIDA
    let repetido = numbersDocument.find((e) => e === input.numberDocument);
    console.log("DNI´s", numbersDocument )
    if (repetido) {
=======

    let numerosDni = users ? users.map(e => e.numberDocument) : null;

    let DniRepetido = numerosDni.find((e) => e === input.numberDocument && input.numberDocument !== numberDocument);

    if (DniRepetido) {
>>>>>>> a4a82c5825d56d9c429c76bff986d7252cebdd7f:client/src/views/FormCrudView/components/Update/UpdateCheckout.jsx
      alert(
        "El numero de documento ingresado ya esta vinculado a otro usuario"
      );
    } else {

      let obj = {

        address: input.address,
        nacionality: input.nacionality,
        sex: input.sex,
        location: input.location,
        documentType: input.documentType,
        numberDocument: input.numberDocument,
        birthDate: input.birthDate,
        phone: input.phone

      };

      dispatch(putUserDetail(id, obj));

      setInput({});

      alert("Excelente");
      history.push("/CheckoutPage");
    }
  }

  const cerrarModalInsertar = () => {

    history.push("/CheckoutPage");
  };

  return (
    <div className="crud_form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >        
        <div className="insertar">
          <div className="insert_label">
            <label className="label_Insert">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value={name}
              disabled
            />

          </div>

          <div className="insert_label">
            <label className="label_Insert">Email:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value={email}
              disabled
            />

          </div>

          <div className="insert_label">
            <label className="label_Insert">Phone:</label>
            <input
              className="form-control"
              name="phone"
              type="text"
              onChange={handleChange}
              value={input.phone}

            />

          </div>

          <div className="insert_label">
            <label className="label_Insert">Address:</label>
            <input
              className="form-control"
              name="address"
              type="text"
              onChange={handleChange}
              value={input.address}
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">date of birth:</label>
            <input
              className="form-control"
              name="birthDate"
              type="date"
              onChange={handleChange}
              value={input.birthDate}
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Nacionality:</label>
            <input
              className="form-control"
              name="nacionality"
              type="text"
              onChange={handleChange}
              value={input.nacionality}
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Sex:</label>
            <Select
              className="selected"
              value={valueSex}
              options={optionSex}
              onChange={(e) => onSelectChangeSex(e)}
              placeholder="hola"
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Document type:</label>
            <Select
              className="selected"
              value={valueDocumentType}
              options={optionDocumentType}
              onChange={(e) => onSelectChangeDocumentType(e)}
              placeholder="hola"
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Document Number:</label>
            <input
              className="form-control"
              name="numberDocument"
              type="text"
              onChange={handleChange}
              value={input.numberDocument}
              pattern="[0-9]+"
            />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Location:</label>
            <input
              className="form-control"
              name="location"
              type="text"
              onChange={handleChange}
              value={input.location}
            />
          </div>


          <div className="crud_Form_Insert_cancelar">
            <button
              className="crud_Form_Insert_cancelar_button"
              type="submit"
              disabled={!input.name}
            >
              Editar
            </button>
            <button
              className="crud_Form_Insert_cancelar_button_danger"
              onClick={cerrarModalInsertar}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <form id='form1'>
      </form>
    </div>
  );
};

export default UpdateCheckout;

