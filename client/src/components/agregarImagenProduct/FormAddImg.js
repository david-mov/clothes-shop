

export default function AddImgProduct({id, name}){
    console.log("soy",id)
   
    return(
        <div>

            <form>
                <input value = {id} hidden/>
            <label><h3>Name</h3></label>
                 <input className='text'
                 type="text"
                 value={name}
                 name="name" readOnly
                

                 />
                   <label><h3>Image</h3></label>
                   <input type= "file">
                   </input>
                   <button type='submit'>Add Image</button>
            </form>
               
        </div>
    )
}