import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";


function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/tasks?${query.toString()}`);
    }  


    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-md">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={"bg-slate-400 w-full text-left text-white p-2 rounded-md"
                            + (task.isCompleted ? " line-through" : ""
                                + " hover:bg-slate-500 transition-colors duration-200"
                            )}>
                        {task.title}
                    </button>
                    <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 text-white p-2 rounded-md
                            hover:bg-slate-500 transition-colors duration-200">
                        <ChevronRightIcon />
                    </button>
                    <button 
                     onClick={() => onDeleteTaskClick(task.id)}
                    className="bg-slate-400 text-white p-2 rounded-md
                            hover:bg-slate-500 transition-colors duration-200">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;