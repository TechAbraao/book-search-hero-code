import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import BookDetails from "../components/pages/BookDetails";
import Home from "../components/pages/Home";
//

//
export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<BookDetails />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRoutes;
