import  {useState} from 'react'

const searchBar = () => {

    let [state, setState] = useState({
        inputFunction: ""
    })

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
    })
    }

    const onSubmitFunction = () => {
     dispatch(laAccion(state)) // deberia despachar la accion pero todavia no estan hechas
    }

    return (
        <div>
            <form onSubmit={onSubmitFunction}>
                <input type="text" name="inputFunction"  value={state.inputFunction} onChange={onChangeInput} placeholder="buscar..."></input>
                <button type="onSubmit"></button>
            </form>
        </div>
    )
}

export default searchBar