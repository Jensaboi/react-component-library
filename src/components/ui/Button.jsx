export default function Button({children, variant, ...rest}){

    return (
        <button
            {...rest}
        >
            {children}
        </button>
    )
}