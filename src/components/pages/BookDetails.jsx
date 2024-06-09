import React from "react";
import { Container } from "../../Container/Container";
import HeaderTitle from "../Header/HeaderTitle/HeaderTitle";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";

export default function BookDetails() {
   const {id} = useParams();

   return (
      <Container>
         <HeaderTitle />
         <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
            <div>
               <h2 className="text-5xl font-bold text-BScustomColor4">Nome do livro</h2>
               <p className="text-xl text-BScustomColor2 py-4">Autor</p>
               <p className="text-BScustomColor4 mt-6 text-2xl">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur?
               </p>
            </div>
            <div>
               <img
                  src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
                  alt=""
                  className="w-full rounded-lg"
               />
            </div>
         </div>
         <h1 className="flex justify-center w-full text-5xl font-semibold text-BScustomColor2">Recomendações com base nesse livro</h1>
         <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-16">
         <Cards id="123"/>
         <Cards id="123" />
         <Cards id="123" />
         <Cards id="123" />
         <Cards id="123" />
         <Cards id="123" />
         </div>
       
      </Container>
   );
}
