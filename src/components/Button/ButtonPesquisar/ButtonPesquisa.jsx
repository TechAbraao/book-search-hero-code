import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
//
export default function ButtonPesquisa(props) {
   return (
      <div className="h-20 flex">
         <motion.button
            whileHover={{ scale: 1.05, opacity: 0.95 }}
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
            "
         >
            <ArrowRight size={35} strokeWidth={3} />
            {props.title}
         </motion.button>
      </div>
   );
}
