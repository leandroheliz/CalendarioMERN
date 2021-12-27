import { Route, Routes } from "react-router-dom";
import Calendario from '../Components/Calendario/Calendario';
import Login from '../Components/Auth/Login';

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Calendario />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
    </>
  )
}

export default AppRouter;