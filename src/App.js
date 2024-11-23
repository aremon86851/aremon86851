import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Page/Home/Home';
import LuxuryHunt from './component/ProjectsDetails/LuxuryHunt';
import BoxStudio from './component/ProjectsDetails/BoxStudio';
import EduTech from './component/ProjectsDetails/EduTech';
import Dashboard from './Page/Dashboard/Dashboard';
import Projects from './layout/Projects';
import New from './Page/New/New';


const reactRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/luxury',
        element: <LuxuryHunt></LuxuryHunt>
      },
      {
        path: '/new',
        element: <New></New>
      },
      {
        path: '/boxstudio',
        element: <BoxStudio></BoxStudio>
      },
      {
        path: '/edutech',
        element: <EduTech></EduTech>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])
function App() {

  return (
    <div className="App">
      <RouterProvider router={reactRouter}>
      </RouterProvider>
    </div>
  );
}

export default App;
