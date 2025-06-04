import { useEffect, useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import { v4 } from "uuid";
import { title } from "process";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=9',
        {
        method: 'GET',
      }
    );
    const data = await response.json();
    setTasks(data);
    };
    fetchTasks();
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