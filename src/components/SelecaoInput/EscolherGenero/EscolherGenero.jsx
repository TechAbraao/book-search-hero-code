import React from "react";
import ButtonGender from "../../Button/ButtonGender/data/dataButtonGender";
import { motion } from "framer-motion";
//
export default function EscolherGenero({ title }) {
   return (
      <section className="w-full flex flex-col items-center justify-center h-64 gap-16">
         <div className="h-16">
            <p className="text-center font-bold w-full size-56">{title}</p>
         </div>
         <nav className="flex justify-center">
            <ButtonGender />
         </nav>
      </section>
   );
}
