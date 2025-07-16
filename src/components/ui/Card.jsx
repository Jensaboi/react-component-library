import deployMentSvg from "../../assets/deployment.svg";
export default function Card({ children }) {
  return (
    <div className="bg-light-primary max-w-100 text-light-text-100 font-medium p-4 pt-15 hover:shadow-lg hover:cursor-pointer shadow-sm text-center rounded-lg relative">
      <div className="bg-blue-500 absolute -top-5 left-[44%] w-fit py-3 px-3 rounded-md">
        <img src={deployMentSvg} />
      </div>
      {children}
    </div>
  );
}
