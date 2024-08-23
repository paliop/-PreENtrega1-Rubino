import React from "react";

const FormularioCheckOut = ({
  datosForm,
  handleChangeInput,
  handleSubmitForm,
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmitForm}
        style={{ display: "block", marginTop: 10 }}
      >
        <h2 className="tit1">DATOS DE LA ORDEN</h2>
        <h5 className="tit2">Completa los datos para terminar tu compra!</h5>
        <div style={{ padding: 10 }}>
          <label className="tit1">Nombre: </label>
          <input
            className="boton2"
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={handleChangeInput}
          ></input>
        </div>

        <div style={{ padding: 10 }}>
          {" "}
          <label className="tit1">Telefono: </label>
          <input
            className="boton2"
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div style={{ padding: 10 }}>
          <label className="tit1">Correo: </label>
          <input
            className="boton2"
            type="text"
            name="email"
            value={datosForm.email}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div style={{ padding: 10 }}>
          <label className="tit1">Confirmar Correo: </label>
          <input
            className="boton2"
            type="text"
            name="confirmarCorreo"
            value={datosForm.confirmarCorreo}
            onChange={handleChangeInput}
          ></input>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "10% 30%" }}>
          <div></div>
          <button type="submit" className="boton3" style={{fontWeight:900}}>
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCheckOut;
