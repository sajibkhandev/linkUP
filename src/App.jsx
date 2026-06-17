import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/home" element={<Home />}></Route>
     
    
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App