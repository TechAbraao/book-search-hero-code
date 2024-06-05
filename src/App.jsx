import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header/Header";
import EscolherGenero from "./components/SelecaoInput/EscolherGenero/EscolherGenero";

function App() {
   const [count, setCount] = useState(0);
   
   return (
      <>
         <Header />
         <EscolherGenero title="Qual gênero deseja?" />
      </>
   );
}

export default App;
