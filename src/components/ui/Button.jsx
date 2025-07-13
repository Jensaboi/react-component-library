export default function Button({
  className,
  variant,
  children,
  color,
  ...rest
}) {
  const colors = {
    black: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-700",
    purple: "bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700",
    green: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700",
    blue: "bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700",
    red: "bg-red-500 text-white hover:bg-red-600 active:bg-red-400",
  };
  const variants = {
    primary:
      "font-sans cursor-pointer shadow-md hover:shadow-lg text-sm font-medium p-2 pl-4 pr-4 rounded-md",
    discrete:
      "font-sans cursor-pointer hover:shadow-lg shadow-md text-sm font-medium p-2 pl-4 pr-4 rounded-md border border-gray-100 hover:border-gray-200 active:bg-gray-100",
  };
  return (
    <button
      className={`${className ? className : ""} ${
        variant ? variants[variant] : ""
      } ${color ? colors[color] : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
