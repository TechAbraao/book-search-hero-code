import React from "react";
import { useCallback } from "react";

export default function Tag({ title }) {
   //
   const randomColors = useCallback(() => {
      const hue = Math.floor(Math.random() * 360);
      const lightness = `hsl(${hue}, 100%, 95%)`;
      const darkness = `hsl(${hue}, 100%, 20%)`;
      return { lightness, darkness };
   }, []);

   //
   return (
      <p
         style={{
            backgroundColor: randomColors().lightness,
            color: randomColors().darkness,
         }}
         className="rounded-full  bg-oapcity-50ext-center text-center w-fit px-3 py-1 text-xs"
      >
         {title}
      </p>
   );
}
