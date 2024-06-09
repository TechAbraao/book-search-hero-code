import React from "react";
import { useRef } from "react";
//
import Header from "../Header/Header/Header";
import EscolherGenero from "../SelecaoInput/EscolherGenero/EscolherGenero";
import Input from "../SelecaoInput/Input/Input";
import Cards from "../Cards/Cards";
//
export default function Home() {
   return (
      <div>
         <Header />
         <EscolherGenero title="Qual gênero deseja?" />
         <Input placeholder="Buscar no Book Search"/>
         <Cards />
      </div>
   );
}
