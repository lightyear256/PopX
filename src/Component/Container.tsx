interface ContainerProps{
    children:React.ReactNode,
    className?: string
}

export default function Container({ children,className}: ContainerProps) {
    return (
        <div className={`w-80 min-h-135 border-2 border-gray-200 rounded-md shadow-lg flex flex-col  ${className}`}>
            {children}
        </div>
    );
}