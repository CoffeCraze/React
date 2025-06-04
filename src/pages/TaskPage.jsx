import { ChevronLastIcon, ChevronLeftIcon } from 'lucide-react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');


    return (
        <div className=' w-screen h-screen flex flex-col items-center bg-gray-500 p-6'>
            <div className='w-[500px] space-y-4'>
                <div className='flex justify-center relative items-center mb-6'>
                    <button
                        onClick={() => window.history.back()}
                        className='bg-slate-600 text-white p-2 rounded-md
                        hover:bg-slate-400 transition-colors duration-200 left-0 absolute'>
                        <ChevronLeftIcon />
                    </button>
                    <h1 className='text-3xl text-slate-100 font-bold text-center gap-4 mb-6 '>
                        Detalhes da Tarefa
                    </h1>
                </div>
    
                <div className='bg-slate-600 p-6 rounded-md shadow-md'>
                    <h2 className='text-2xl text-slate-100 font-bold mb-4'>{title}</h2>
                    <p className='text-slate-300'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TaskPage;