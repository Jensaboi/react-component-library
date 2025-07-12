

export default function TabButton({ variant , children, className, ...rest}){
    const variants ={
        'selected': 'border-b-2 border-indigo-600'
    }
    const defaultStyle = "pl-3 pr-3 pb-1 cursor-pointer"

    return(
        <button
            {...rest}
            className={`${defaultStyle} ${variants[variant]}`}
        >
            {children}
        </button>
    )
}
