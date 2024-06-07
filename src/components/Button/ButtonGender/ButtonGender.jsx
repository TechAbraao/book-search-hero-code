import React from "react";
import { motion } from "framer-motion";
//
export default function ButtonGender({ titleGender }) {
   return (
      <motion.div className="bg-BScustomColor2 w-44 h-16 flex justify-center" whileHover={{ scale: 1.1, opacity: 0.95 }}>
         <button className="h-full w-full text-2xl font-bold text-white hover:bg-BScustomColor4">{titleGender}</button>
      </motion.div>
   );
}
