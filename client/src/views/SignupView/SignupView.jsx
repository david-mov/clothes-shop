import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {postSignup} from "../../stateManagement/actions/postSignup"

function SignupView() {

    const dispatch = useDispatch()
    const [state, setState] = useState()

    const onSubmitForm = (e) => {
        e.preventDefault()
        dispatch(postSignup(state))
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
            <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignupView;
