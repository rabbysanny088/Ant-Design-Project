import { Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics";
import Crm from "../pages/Crm";
import Crypotos from "../pages/Crypotos";
import HealthCare from "../pages/HealthCare";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const OnlyRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/crypotos" element={<Crypotos />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default OnlyRouters;
