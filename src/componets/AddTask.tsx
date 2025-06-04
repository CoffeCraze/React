import { useState } from "react";
import Input from "./input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md flex flex-col ">
      <h2 className="text-2xl font-bold text-slate-700 text-center">Adicionar Tarefa</h2>
      <Input
        type="text"
        placeholder=" digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder=" digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={() => { 
      // Verifica se todos os campos estão preenchidos
      if (!title.trim() || !description.trim()  || !priority.trim()) {
        // Exibe um alerta se algum campo estiver vazio
        alert("Por favor, preencha todos os campos.");
        return;
      }
      onAddTaskSubmit( title, description, priority )
      setTitle('');
      setDescription('');
      setPriority('');

      }}
      className="bg-slate-500 hover:bg-slate-700 transition-colors duration-200 text-white py-2 rounded-md font-medium">
        Adicionar
      </button>


    </div>
  );
}

export default AddTask;