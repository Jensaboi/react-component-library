import deployMentSvg from "../../assets/deployment.svg";
export default function Card({ children, ...rest }) {
  return (
    <div {...rest}>
      <div>
        <img src={deployMentSvg} />
      </div>
      {children}
    </div>
  );
}
