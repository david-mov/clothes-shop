import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {postLogin} from "../../stateManagement/actions/postLogin"

function LoginView() {
    const dispatch = useDispatch()
    const [state, setState] = useState()

    const onSubmitForm = (e) => {
        e.preventDefault()
        dispatch(postLogin(state))
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
            <input type="email" name="email" placeholder="email" onChange={HandleChange}></input>
            <input type="password" name="password" placeholder="password" onChange={HandleChange}></input>
            <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginView
