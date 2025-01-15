import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router";
import { ROUTES } from './routes/Routes';


let route = createBrowserRouter(ROUTES)

function App() {
 
  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
