import React from "react";

export default function ButtonGender({ titleGender }) {
   return (
      <div className="bg-BScustomColor2 h-14 w-52">
         <button
            className="
        w-full
        h-full
        items-center
        text-2xl
       text-white font-bold
      hover:bg-BScustomColor4
      hover:delay-150
      ease-in duration-300
        "
         >
            {titleGender}
         </button>
      </div>
   );
}
