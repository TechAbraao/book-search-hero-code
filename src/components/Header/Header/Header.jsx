import React from "react";
import "./Header.css";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Picture from "../../../../public/picture.png";
import ButtonPesquisar from "../../Button/ButtonPesquisar/ButtonPesquisa";
export default function Header() {
   return (
      <div
         id="header-container"
         className="header flex bg-BScustomColor1 justify-evenly"
      >
         <div className="header-text flex flex-col w-2/4 gap-y-13 justify-evenly">
            <HeaderTitle />
            <div className="flex flex-col gap-7 justify-center items-start">
               <p className="md:text-8xl text-4xl font-bold text-BScustomColor4">
                  <span className="bg-BScustomColor2 px-1">Descubra</span> sua
               </p>
               <p className="md:text-8xl text-4xl font-bold text-BScustomColor4">
                  próxima leitura!
               </p>
               <p className="text-BScustomColor5 text-2xl">
                  Utilizar o{" "}
                  <span className="text-BScustomColor2 font-bold">
                     Book Search
                  </span>{" "}
                  como sua principal plataforma de pesquisa de livros oferece
                  resultados rápidos e precisos, otimizando a experiência e
                  satisfação do usuário.
               </p>
            </div>
            <ButtonPesquisar title="Pesquisar" />
         </div>
         <div className="header-picture flex items-center justify-center">
            <img src={Picture} className="" />
         </div>
      </div>
   );
}
