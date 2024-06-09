import { forwardRef } from "react";

export const Input = forwardRef(({ placeholder, ...rest }, ref) => {
   return (
      <input
         ref={ref}
         className="w-full border-1 border-grey outline-1"
         {...rest}
         placeholder={placeholder}
      />
   );
});

export default Input;
