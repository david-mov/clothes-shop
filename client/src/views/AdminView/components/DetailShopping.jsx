import React  from "react";
import DataOrderDetails from "./DataOrderDetail";
import DataUserDetails from './DataUserDetail';
import DataShoppingDetails from './DataShoppingDetails';



const DetailShopping = ({data}) => {

    const DataUser = data?.map((e) => e.cartUsers?.map((el) => el.user));
    const DataShopping = data?.map((e) => e.cartUsers);

    return(

        <div>
            <DataUserDetails key={1} dataUser={DataUser} />
            <DataOrderDetails key={2} dataOrder={data}/>
            <DataShoppingDetails key={3} dataShopping={DataShopping} />
        </div>
    )
}


export default DetailShopping;