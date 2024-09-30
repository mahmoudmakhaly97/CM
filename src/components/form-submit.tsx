"use client"

import { cn } from "@/lib/utils"
import { useFormStatus } from "react-dom";
 

const FormSubmit = () => {
    const status = useFormStatus();
    const isPending = status.pending;
    


    return <button className={cn('bg-[#29E966] text-black px-10 h-24 text-4xl rounded-full font-bold border-b-4 border-black', isPending ? '' : '')} disabled={isPending}  type="submit">SIGN UP NOW</button>
}

export { FormSubmit }