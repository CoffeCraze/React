import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Tasks from './componets/Tasks.jsx';
import TaskPage from './pages/TaskPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
  },
  { 
    path: '/tasks',
    element: <TaskPage />,
  },
  
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
