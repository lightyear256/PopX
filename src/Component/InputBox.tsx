import { Eye, EyeClosed } from "lucide-react"
import { useState } from "react"

interface InputProps{
    title:string,
    required:boolean,
    placeholder:string,
    type:"text"|"password"|"email",
    value:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputBox(props: InputProps) {
    const[visible,setvisible]=useState(false)
    function showpass(){
        setvisible(!visible);
    }
    return (
        <div className="relative">
            <input 
                required={props.required}
                className="peer w-72 rounded-lg border text-sm border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-secondary-500 focus:ring-0 focus:outline-none" 
                type={visible?"text":props.type} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.type==='password'&&<span className="absolute right-3 top-2 cursor-pointer text-gray-500" onClick={showpass}>{visible?<Eye />:<EyeClosed/>}</span>}
            <label className="absolute left-2 -top-2 bg-white px-1 text-[12px] text-secondary-500">
                {props.title}{props.required && <span className="text-red-600">*</span>}
            </label>
        </div>
    )
}
