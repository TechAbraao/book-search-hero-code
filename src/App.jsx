import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header/Header";
import EscolherGenero from "./components/SelecaoInput/EscolherGenero/EscolherGenero";
import Input from "./components/SelecaoInput/Input/Input";
import Cards from "./components/Cards/Cards";

//
import Home from "./components/pages/Home";
import AppRoutes from "./routes/AppRoutes";

//
function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div className="App">
            <AppRoutes />
         </div>
      </>
   );
}

export default App;
