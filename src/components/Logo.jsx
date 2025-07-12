import { CgWebsite } from "react-icons/cg";

export default function Logo() {
  return (
    <div className="flex flex-row justify-center items-center gap-0.5">
      <CgWebsite className="text-sky-300" size="26px" />
      <h1 className="text-sky-400 font-semibold">React Components</h1>
    </div>
  );
}
