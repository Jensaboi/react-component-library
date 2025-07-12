

export default function Button({ variant , children, className, ...rest}){
    const variants ={
        tabBtn: ''
    }
    return(
        <button className="border-none"
            {...rest}
        >
            {children}
        </button>
    )
}