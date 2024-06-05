import React from "react";
import "./ButtonPesquisar.css";
import { ArrowRight } from "lucide-react";

export default function ButtonPesquisa(props) {
   return (
      <div className="h-20 flex">
         <button
            className="bg-BScustomColor2
             hover:bg-BScustomColor4
             text-white 
            font-bold 
            w-1/4 
            h-full 
            flex 
            justify-center
            gap-8
            text-size
            items-center 
            flex-row-reverse
            text-2xl
            hover:delay-150
            ease-in duration-300
            "
         >
            <ArrowRight size={35} strokeWidth={3} />
            {props.title}
         </button>
         
      </div>
   );
}
