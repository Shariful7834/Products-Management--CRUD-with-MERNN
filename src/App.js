import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
