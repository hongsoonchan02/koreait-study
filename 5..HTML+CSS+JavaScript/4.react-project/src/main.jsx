import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterTest from './pages/02_routerTest.jsx'
import NewVariable from './components/01_NewVariable.jsx'
import Query from './pages/03_Query.jsx'
import Path from './pages/04_Path.jsx'
import Extention from './pages/05_Extention.jsx'
import Props from './pages/06_Props.jsx'
import Rendering from './pages/07_Rendering.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/01", // URL
    element: <NewVariable /> // 해당 URL로 요청이 왔을 때 보여줄(렌더링 할) 함수
  },
  {
    path: "/02",
    element: <RouterTest />
  },
  {
    path: "/03",
    element: <Query />
  },
  {
    path: "/04/:value",
    element: <Path />
  },
  {
    path: "/05",
    element: <Extention />
  },
  {
    path: "/06",
    element: <Props />
  },
  {
    path: "/07",
    element: <Rendering />
  }
])
            
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
