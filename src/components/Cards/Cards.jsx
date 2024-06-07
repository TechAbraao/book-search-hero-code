import React from "react";
import Tag from "../Tag/Tag"

export default function Cards() {
   return (
      <>
         <div className="p-4 grid grid-cols-3 gap-3 shadow-lg border border-gray-100 max-w-lg w-full">
            <img
               src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
               alt=""
               className="col-span-1 w-full h-full rounded-lg"
            />
            <div className="col-span-2">
               <p className="font-bold text-2xl text-BScustomColor2">
                  Código Limpo
               </p>
               <p className="font-light text-lg text-BScustomColor5">Autor</p>
               <Tag title="Computer"/>
               <p className="text-xs">
                  <strong>Sinopse:</strong> orem ipsum dolor sit amet,
                  consectetur adipiscing elit. Cras ullamcorper erat faucibus
                  justo luctus gravida. In hac habitasse platea dictumst.
                  Curabitur at massa vel nulla pulvinar dignissim
               </p>
               <button
                  className="bg-BScustomColor2
          hover:bg-BScustomColor4
          text-white 
            font-bold 
            w-full
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
                  Ver mais
               </button>
            </div>
         </div>
      </>
   );
}
