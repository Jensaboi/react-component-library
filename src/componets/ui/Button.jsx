

export default function Button({ variant ,children, ...rest}){
    return(
        <button
            {...rest}
        >
            {children}
        </button>
    )
}