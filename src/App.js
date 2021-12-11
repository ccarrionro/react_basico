import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* Componente greeting.jsx */}
          {/*<Greeting name="Carlos"></Greeting>*/}
          <Greetingf name="Carlos Carrión"></Greetingf>
          {/* Componente de listado de tareas */}
          {/*<TaskListComponent></TaskListComponent> */}
          {/*<Ejemplo2></Ejemplo2>*/}
          {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
          {/*<Ejemplo4 nombre="Carlos Carrión Rodríguez">
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4>*/}
      </header>
    </div>
  );
}

export default App;
