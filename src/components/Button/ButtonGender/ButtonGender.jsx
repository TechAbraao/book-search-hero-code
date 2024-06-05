import React from "react";

export default function ButtonGender({ titleGender }) {
   return (
      <div className="bg-red-300 w-44 h-16 flex justify-center">
         <button className="h-full w-full">{titleGender}</button>
      </div>
   );
}
