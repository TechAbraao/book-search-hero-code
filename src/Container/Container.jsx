import { ReactNode } from "react";

export function Container({ children }) {
   return (
      <div className="px-2 md:px-5 py-4 mx-auto w-full max-w-screen-2xl">
         {children}
      </div>
   );
}
