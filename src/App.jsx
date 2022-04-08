import { ToastContainer } from "react-toastify";
import AppRoutes from "../AppRoutes";

import '../node_modules/react-toastify/dist/ReactToastify.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/icons.min.css';

function App() {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  )
}

export default App
