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
import ListRendering from './pages/08_ListRendering.jsx'
import EventHandler from './pages/09_EventHandler.jsx'
import Q1_ProfilePage from './pages/training/Q1_ProfilePage.jsx'
import Q2_ButtonPage from './pages/training/Q2_ButtonPage.jsx'
import Q3_LoginPage from './pages/training/Q3_LoginPage.jsx'
import Q4_FruitPage from './pages/training/Q4_FruitPage.jsx'
import Q5_EvenPage from './pages/training/Q5_EvenPage.jsx'
import Q6_MenuPage from './pages/training/Q6_MenuPage.jsx'
import Q7_MessagePage from './pages/training/Q7_MessagePage.jsx'
import Q8_StudentPage from './pages/training/Q8_StudentPage.jsx'
import Q9_ResultPage from './pages/training/Q9_ResultPage.jsx'
import State from './pages/10_State.jsx'
import UseState from './pages/11_useState.jsx'
import FormHandling from './pages/12_FormHandling.jsx'
import Lifting from './pages/13_Lifting.jsx'


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
  },
  {
    path: "/08",
    element: <ListRendering />
  },
  {
    path: "/09",
    element: <EventHandler />
  },
  {
    path: "/Q1",
    element: <Q1_ProfilePage />
  },
  {
    path: "/Q2",
    element: <Q2_ButtonPage />
  },
  {
    path: "/Q3",
    element: <Q3_LoginPage />
  },
  {
    path: "/Q4",
    element: <Q4_FruitPage />
  },
  {
    path: "/Q5",
    element: <Q5_EvenPage />
  },
  {
    path: "/Q6",
    element: <Q6_MenuPage />
  },
  {
    path: "/Q7",
    element: <Q7_MessagePage />
  },
  {
    path: "/Q8",
    element: <Q8_StudentPage />
  },
  {
    path: "/Q9",
    element: <Q9_ResultPage />
  },
  {
    path: "/10",
    element: <State />
  },
  {
    path: "/11",
    element: <UseState />
  },
  {
    path: "/12",
    element: <FormHandling />
  },
  {
    path: "/13",
    element: <Lifting />
  }
])
            
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
