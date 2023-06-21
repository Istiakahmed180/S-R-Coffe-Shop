import { RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Footer from "./Pages/Share/Footer/Footer";
import Navbar from "./Pages/Share/Navbar/Navbar";
import router from "./Router/Routers/Routers";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
