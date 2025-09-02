type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    variant: ButtonVariant;
    size:"lg"|"xl";
    title:string,
    onClickFunction: () => void;
    isDisabled:boolean
}
export default function Button(props:ButtonProps){
    const baseStyle="flex justify-center items-center rounded-sm border-box p-1  font-bold";
    const variantStyle={
        primary:"bg-secondary-500 text-white cursor-pointer",
        secondary:"bg-primary-500 text-black cursor-pointer",
        disabled:"bg-disabled-500 text-white cursor-not-allowed "
    }[props.isDisabled ? "disabled" : props.variant]
    const sizeStyle={
        lg:"w-72 h-10 text-sm",
        xl:"w-85 h-12 text-md"
    }[props.size]
    return(
        <button type="submit" className={`${baseStyle} ${variantStyle} ${sizeStyle}`} onClick={props.onClickFunction}>
            {props.title}
        </button>
    )
}