import "./App.css";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div>
        <h1>Gerenciador de Tarefas</h1>
        <Tasks />
        <AddTasks />
      </div>
    </>
  );
}

export default App;
