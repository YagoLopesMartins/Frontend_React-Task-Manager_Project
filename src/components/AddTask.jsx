import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite um nome da task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite uma descrição da task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white py-2 px-4 rounded-md font-medium"
        onClick={() => onAddTaskSubmit(title, description)}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
