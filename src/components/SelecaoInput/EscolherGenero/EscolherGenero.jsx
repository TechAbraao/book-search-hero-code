import React from "react";
import ButtonGender from "../../Button/ButtonGender/data/dataButtonGender"

export default function EscolherGenero(props) {
   return (
      <section className="w-full flex flex-col items-center gap-20 justify-center h-64">
         <div className="h-16">
            <p className="text-center font-bold w-full size-56">
               {props.title}
            </p>
         </div>
         <nav id="escolhergenero-nav" className="flex gap-7">
            <ButtonGender />
         </nav>
      </section>
   );
}
