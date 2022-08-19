import TareaFormulario from "./Formulario";
import "../scss/ui/_listatareas.scss";
import { useState } from "react";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); // quitar espacios ini-end
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="lista-tareas">
        {tareas.map((tarea) => {
          return (
            <Tarea
              texto={tarea.texto}
              completada={tarea.completada}
              key={tarea.id} //para q react identifique cada tarea
              id={tarea.id}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListaDeTareas;
