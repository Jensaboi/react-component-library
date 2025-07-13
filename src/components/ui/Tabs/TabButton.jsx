export default function TabButton({ variant, children, className, ...rest }) {
    const variants = {
        selected: "border-b-white border-indigo-600",
    };
    const defaultStyle =
        "pl-3 pr-3 pt-1 pb-1 cursor-pointer border rounded-t-sm";

    return (
        <button {...rest} className={`${defaultStyle} ${variants[variant]}`}>
            {children}
        </button>
    );
}
