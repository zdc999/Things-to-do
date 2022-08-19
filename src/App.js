import "./scss/Index.scss";
import ListaDeTareas from "./componentes/ListaDeTareas";
import { VscTasklist } from "react-icons/vsc";

function App() {
  return (
    <div className="app">
      <h1 className="titulo-tarea">
        Things To Do <VscTasklist className="titulo-tarea-icono" />
      </h1>
      <div className="tareas">
        <h2 className="tareas__titulo">My Tasks</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
