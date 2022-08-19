import { useState } from "react";
import "../scss/ui/_formulario.scss";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva); // estandar de lo q ocurre al enviar el form
  };

  return (
    <form className="form" onSubmit={manejarEnvio}>
      <input
        className="form__input"
        type="text"
        placeholder="Write a Task"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="form__boton">Add a Task</button>
    </form>
  );
}

export default TareaFormulario;
