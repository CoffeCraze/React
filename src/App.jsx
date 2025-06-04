import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { use } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      // CHAMAR A API PARA BUSCAR AS TAREFAS
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=7',
        {
        method: 'GET',
      }
    );


    if (!response.ok) {
      throw new Error('Erro ao buscar tarefas');
    }

    const data = await response.json();
    setTasks(data);
    };
    // SE QUISER< VOCÊ PODE CHAMAR A API AQUI
    // fetchTasks();
    // MAS É MELHOR CHAMAR A API NO COMPONENTE DID MOUNT
    // PARA NÃO FICAR CHAMANDO A API TODA VEZ QUE O COMPONENTE FOR RENDERIZADO
    // E PARA NÃO FICAR CHAMANDO A API TODA VEZ QUE O ESTADO FOR ATUALIZADO
    // E PARA NÃO FICAR CHAMANDO A API TODA VEZ QUE O COMPONENTE FOR RENDERIZADO
  }, []);



  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task;
    })
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description, priority) {
    const newTask = {
      id: v4(),
      title,
      description,
      priority,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);

  }

  return (
    <div className=' w-screen h-screen flex flex-col items-center bg-gray-500 p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-3xl text-slate-100 font-bold text-center gap-4 mb-6'>
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;