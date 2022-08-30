import Login from "./components/Login/index";
import SignUp from "./components/SignUp/index";
import Home from "./components/Home";
import "./assets/css/common.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<Login />} />
    </Routes>
    </>
  );
};

export default App;
