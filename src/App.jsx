import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SideMenu from "./Components/SideMenu";
import Login from "./Components/pages/Login";
import Singup from "./Components/pages/Singup";

function App() {
  const location = useLocation();

  const exactPaths = ["/", "/login"];

  const atLast = !exactPaths.includes(location.pathname);
  return (
    <>
      {atLast && <SideMenu />}
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
