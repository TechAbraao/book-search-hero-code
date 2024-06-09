import React from "react";
import ButtonGender from "../ButtonGender";
import { useState, useCallback } from "react";

//
export default function dataButtonGender() {
   const genderBooks = [
      "Comédia",
      "Ação",
      "Ficção",
      "Drama",
      "Romance",
      "Suspense",
      "Autoajuda",
   ];
   const [selectedGender, setSelectedGender] = useState([]);
   const handleSelect = useCallback(
      (title) => {
         if (selectedGender.includes(title)) {
            const removeGender = selectedGender.filter(
               (item) => item !== title
            );
            setSelectedGender(removeGender);
         } else {
            setSelectedGender([...ButtonGender, title]);
         }
      },
      [selectedGender]
   );

   return (
      <>
         <div className="gap-5 grid grid-cols-7">
            {genderBooks.map((book, key) => (
               <ButtonGender
                  titleGender={book}
                  onClick={() => handleSelect(book)}
               />
            ))}
         </div>
      </>
   );
}
