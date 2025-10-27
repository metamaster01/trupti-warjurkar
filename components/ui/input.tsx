// Input.tsx
import * as React from "react";
import { cn } from "@/lib/utils";


// Use a type alias instead of an empty interface to avoid the eslint warning
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
return (
<input
ref={ref}
className={cn(
"flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#945CAD] disabled:cursor-not-allowed disabled:opacity-50",
className
)}
{...props}
/>
);
});
Input.displayName = "Input";


export { Input };