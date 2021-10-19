import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserDetails } from "../../../../stateManagement/actions/getAllUserDetails";
import { useHistory} from "react-router-dom";
import { postUserDetails } from "./../../../../stateManagement/actions/postUserDetails";
import Select from "react-select";
import axios from "axios";


const Checkout = ({name, id, email, phone, data}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserDetails());     
  }, [dispatch]); 
  console.log("ESTE ES EL DATA NUEVO", data)

  useEffect(()=>{
    const script = document.createElement('script');
    const attr_data_preference = document.createAttribute('data-preference-id')
    //const attr_nonce = document.createAttribute('nonce')
  
    attr_data_preference.value = data
    //attr_nonce.value = 'abcdefg'
    script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference)
   // script.setAttributeNode(attr_nonce)
    document.getElementById('form1').appendChild(script)
    return () =>{
      document.getElementById('form1').removeChild(script);
    }
   },[])

  const history = useHistory();

  let users = useSelector((state) => state.userReducer.allUserDetails);

  const [valueSex, setValueSex] = useState({
     value: "", label: "" 
    });
  
  const [valueDocumentType, setValueDocumentType] = useState({
    value: "", label: "" 
   })  

  const [input, setInput] = useState({
    name,
    email,
    phone: "",
    address:"",
    nacionality:"",
    sex:valueSex,
    location:"",
    documentType:valueDocumentType,
    numberDocument:"",
    birthDate:"",    
  });
  
  

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const optionSex = [
    {value: "female", label: "Female"},
    {value: "male", label: "Male"},

  ]
  
  const onSelectChangeSex = (e) => {
    setInput({
      ...input,
      sex: e.value,
    });

    setValueSex(e);
  };

  const optionDocumentType = [
    {value: "dni", label: "DNI"},
    {value: "passport", label: "Passport"},
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
    let numbersDocument = users.map((e) => e.numberDocument);
    //BUSCO SI HAY ALGUNA CATEGORIA QUE ESTE REPETIDA
    let repetido = numbersDocument.find((e) => e == input.numberDocument);
    console.log("DNI´s", numbersDocument )
    if (repetido) {
      alert(
        "El numero de documento  que esta ingresando ya se encuentra en nuestra base de datos. por favor ingrese otro"
      );
    } else {
      
      let obj = {
        address: input.address,
        nacionality: input.nacionality,
        sex: input.sex,
        location: input.location,
        documentType: input.documentType,
        numberDocument: (input.numberDocument),
        birthDate: input.birthDate,
        phone: (input.phone)
      };
      
      dispatch(postUserDetails(id,obj));
      
      setInput({});
  
      alert("Excelente");
      // history.push("/list");
    }
    

  };

  const cerrarModalInsertar = () => {
    
    history.push("/list");
  };

  
  console.log("IDDDDDDDDD",id)
  console.log("INPUT",input)

  return (
    <div className="crud_form">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="label_Insert">Please fill out this form before proceeding with the purchase.</div>
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
              value={phone}
              
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
              type="text"
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
                
              />
          </div>

          <div className="insert_label">
            <label className="label_Insert">Document type:</label>
              <Select
                className="selected"
                value={valueDocumentType}
                options={optionDocumentType}
                onChange={(e) => onSelectChangeDocumentType(e)}
                
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

export default Checkout;

