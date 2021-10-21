import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useUserId } from '../../../hooks/useUserId'

const FORM_ID = 'payment-form';

export default function Product() {
    const { id } = useParams(); // id de producto
    let [user, okId] = useUserId();
    const [datos, setDatos] = useState("")

    //   useEffect(() => {
    //     // luego de montarse el componente, le pedimos al backend el preferenceId
    //     axios.post(`http://localhost:3001/checkout/${user?.id}`)
    //     .then((data)=>{
    //         setDatos(data.data)
    //         console.info('Contenido de data:', data)
    //       }).catch(err => console.error(err));
    //   }, [user]);

    useEffect(() => {
        if (user !== null) {
            axios
                .get(`http://localhost:3001/checkout/${user?.id}`)
                .then((data) => {
                    setDatos(data.data)
                }).catch(err => console.error(err));            
        }
    }, [user])

    useEffect(() => {
        if (datos) {
            const attr_data_preference = document.createAttribute('data-preference-id')
            // con el datos en mano, inyectamos el script de mercadoPago
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src =
                'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
            attr_data_preference.value = datos.id;
            script.setAttributeNode(attr_data_preference)
            const form = document.getElementById(FORM_ID);
            form.appendChild(script);
        }
    }, [datos]);

    return (
        <form id={FORM_ID} method="GET" />
    );
}