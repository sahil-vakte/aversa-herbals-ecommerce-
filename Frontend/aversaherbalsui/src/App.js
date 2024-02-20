import { Route, Routes } from "react-router-dom";
import WebRoutes from "./Routes/WebRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element=<WebRoutes /> />
        <Route path="/app-admin/*" element=<AdminRoutes /> />
      </Routes>
    </div>
  );
}

export default App;
