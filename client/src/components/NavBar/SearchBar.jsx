import  {useState} from 'react'

const searchBar = () => {

    let [state, setState] = useState("")

    const onChangeInput = (e) => setState(e.target.value);

    const onSubmitFunction = (e) => {
     e.preventDefault()
     dispatch(laAccion(state)) // deberia despachar la accion pero todavia no estan hechas
    }

    return (
        <div>
            <form onSubmit={onSubmitFunction}>
                <input type="text" name="inputFunction"  value={state} onChange={onChangeInput} placeholder="buscar..."></input>
                <button type="onSubmit"></button>
            </form>
        </div>
    )
}

export default searchBar