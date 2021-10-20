import axios from "axios";

export const getCartDetailsUser = (idFinal) => async() => {  
	try {
		const CartDetailsUser = await axios.get(`/checkout/${idFinal}`)
		return CartDetailsUser.data;
	}
	catch (e) {
		console.error(e)
	}
}