
export const Form = () => {

  return (
<form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="insertar">
          <div>
            <h3 className="h3_insert">Insert Product</h3>
          </div>
          <div className="insert_label">
            <label>Categories</label>
            <input name = "categories" type= "text" value = {id} readOnly />
            <Select
              name = "categories"
              value={valueCate}
              options={Options}
              isMulti
              onChange={(e) => onSelectChangeNew(e)}
            />
          </div>
          <div className="insert_label">
            <label>Zise</label>
            <Select
              value={valueSize}
              options={Optionsize}
              isMulti
              onChange={(e) => onSelectChangeNewSize(e)}
            />
          </div>
          <div className="insert_label">
            <label>Type</label>
            <Select
              value={valueType}
              options={OptionType}
              onChange={(e) => onSelectChangeNewType(e)}
            />
          </div>
          <div className="insert_label">
            <label className="label_Insert">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value = {input.name}
            />
            <label className="label_Insert">Price:</label>
            <input
              className="form-control"
              name="price"
              type="text"
              onChange={handleChange}
              value={input.price}
            />

            <label className="label_Insert">Description:</label>
            <input
              className="form-control"
              name="description"
              type="text"
              onChange={handleChange}
              value = {input.description}
            />
            <label className="label_Insert">Stock:</label>
            <input
              className="form-control"
              name="stock"
              type="number"
              min="0" 
              onChange={handleChange}
              value = {input.stock}
            />
            <label className="label_Insert">Color:</label>
            <input
              className="form-control"
              name="color"
              type="text"
              onChange={handleChange}
              value = {input.color}
            />

            <label className="label_Insert">Image:</label>
          </div>
          <div className="crud_Form_Insert_cancelar">
            <button className="crud_Form_Insert_cancelar_button" type="submit">
              Editar
            </button>
            <button
              className="crud_Form_Insert_cancelar_button_danger"
              onClick={(e) => cerrarModalInsertar(e)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

  )
}
