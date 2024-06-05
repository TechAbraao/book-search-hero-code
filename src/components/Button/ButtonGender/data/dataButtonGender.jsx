import React from "react";
import ButtonGender from "../ButtonGender";

export default function dataButtonGender() {
   const genderBooks = [
      "Comédia",
      "Drama",
      "Romance",
      "Suspense",
      "Autoajuda"
    
   ];
   return (
      <>
         {genderBooks.map((value) => (
            <ButtonGender titleGender={value} />
         ))}
      </>
   );
}
