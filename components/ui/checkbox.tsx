// Checkbox.tsx
import * as React from "react";
import { cn } from "@/lib/utils";


type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;


const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
return (
<input
type="checkbox"
ref={ref}
className={cn(
"h-4 w-4 rounded border-gray-300 text-[#945CAD] focus:ring-[#945CAD]",
className
)}
{...props}
/>
);
});
Checkbox.displayName = "Checkbox";


export { Checkbox };