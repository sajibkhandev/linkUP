import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Message from "./pages/Message";
import Setting from "./pages/Setting";
import Notification from "./pages/Notification";
import Rootlayout from "./layouts/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>


      <Route path="/" element={<Rootlayout/>}>
        <Route path="home" element={<Home />}></Route>
        <Route path="message" element={<Message />}></Route>
        <Route path="setting" element={<Setting />}></Route>
        <Route path="notification" element={<Notification />}></Route>

      </Route>
     
    
    </Route>
  )
);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App