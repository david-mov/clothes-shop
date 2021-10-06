import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {postRegister} from "../../stateManagement/actions/postRegister"

function RegisterView() {

    const dispatch = useDispatch()
    const [state, setState] = useState()

    const onSubmitForm = (e) => {
        e.preventDefault()
        dispatch(postRegister(state))
    }

    const HandleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        }


    return (
        <div>
            <form onSubmit={onSubmitForm}>
            <input name="name" placeholder="name" onChange={HandleChange}></input>
            <input type="email" name="email" placeholder="email" onChange={HandleChange}></input>
            <input type="password" name="password" placeholder="password" onChange={HandleChange}></input>
            <button type="submit">register</button>
            </form>
        </div>
    )
}

export default RegisterView
