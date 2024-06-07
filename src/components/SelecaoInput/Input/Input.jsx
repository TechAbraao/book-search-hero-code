import React from "react";

export default function Input() {
   return (
         <div className="pt-10 w-full flex flex-col justify-center items-center h-72">
            <p className="font-semibold text-3xl w-4/5">
               Sobre o que você gostaria de receber uma recomendação de livro?
            </p>
            <input 
            type="text"
            className="outline-none shadow-lg border border-gray-100 rounded-lg w-4/5 px-3 py-3 mt-5 "
            placeholder="Buscar no Book Search" />
            <p className="font-bold pt-28 text-4xl">Livros recomendados</p>
         </div>
   );
}
