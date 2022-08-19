import "../scss/ui/_tareas.scss";
import { VscTrash } from "react-icons/vsc";

function Tarea({ texto, completada, id, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tarea tarea--completada" : "tarea"}>
      <div
        className="tarea__texto"
        onClick={() => {
          completarTarea(id);
        }}
      >
        {texto}
      </div>
      <div
        className="tarea__iconos"
        onClick={() => {
          eliminarTarea(id);
        }}
      >
        <VscTrash className="tarea__icono" />
      </div>
    </div>
  );
}

export default Tarea;
