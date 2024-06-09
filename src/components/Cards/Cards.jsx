import React, { useCallback } from "react";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

export default function Cards({ id }) {
   const navigate = useNavigate();
   const handleSelectBook = useCallback(() => {
      navigate(`/${id}`);
   }, [id, navigate]);

   return (
      <>
         <div className="p-4 grid grid-cols-2 gap-4shadow-lg border border-gray-100 max-w-lg w-full">
            <img
               src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
               alt=""
               className="col-span-1 w-full h-full rounded-lg"
            />
            <div className="w-full flex flex-col gap-5">
               <p className="font-bold text-BScustomColor2 text-sm">
                  Código Limpo
               </p>
               <p className="font-light text-lg text-BScustomColor5">Autor</p>
               <Tag title="Computer" />
               <p className="w-full text-sm">
                  <strong>Sinopse:</strong> orem ipsum dolor sit amet,
                  consectetur adipiscing elit. Cras ullamcorper erat faucibus
                  justo luctus gravida.
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
            items-center 
            flex-row-reverse
            text-xl
            hover:delay-150
            ease-in duration-300
            p-2
            "
                  onClick={handleSelectBook}
               >
                  Ver mais
               </button>
            </div>
         </div>
      </>
   );
}
