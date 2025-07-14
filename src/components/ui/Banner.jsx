import checkCircle from "../../assets/check-circle.svg";
import exclamationTriangle from "../../assets/exclamation-triangle.svg";
import infoCircle from "../../assets/info-circle.svg";
import xCircle from "../../assets/x-circle.svg";

export default function Banner({
    size = "896px",
    children,
    status = "neutral",
    title = null,
    icon = null,
}) {
    if (!icon && status === "success") {
        icon = checkCircle;
    }
    if (!icon && status === "warning") {
        icon = exclamationTriangle;
    }
    if (!icon && status === "error") {
        icon = xCircle;
    }
    if (!icon && status === "neutral") {
        icon = infoCircle;
    }

    if (!title && status === "success") {
        title = "Congratulations";
    }
    if (!title && status === "warning") {
        title = "Attention";
    }
    if (!title && status === "error") {
        title = "There is a problem with your application";
    }
    if (!title && status === "neutral") {
        title = "Update availbe";
    }

<<<<<<< Updated upstream
    const defaultStyles =
        "m-w-[896px] w-fit min-w-[360px] font-sm gap-3 p-[16px] rounded-md";
=======
  const defaultStyles =
    "w-full max-w-[896px] font-sm gap-3 p-[16px] rounded-md";
>>>>>>> Stashed changes

    const statuss = {
        neutral: "bg-blue-100 text-blue-500",
        success: "bg-green-100 text-green-500",
        warning: "bg-yellow-100 text-yellow-600",
        error: "bg-red-100 text-red-500",
    };
    const titleColors = {
        neutral: "text-blue-800",
        success: "text-green-800",
        warning: "text-yellow-800",
        error: "text-red-800",
    };
    return (
        <div className={`${defaultStyles} ${statuss[status]} `}>
            <div className="flex flex-row justify-start items-center gap-2">
                <img className="w-4" src={icon} />
                <h3 className={`font-medium ${titleColors[status]}`}>
                    {title}
                </h3>
            </div>
            {children && <p className="font-normal ml-6">{children}</p>}
        </div>
    );
}
