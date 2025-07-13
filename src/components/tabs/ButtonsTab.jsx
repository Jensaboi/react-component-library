import React from "react";
import Button from "../ui/Button";

export default function ButtonsTab() {
  return (
    <>
      <h2 className="font-semibold text-gray-900 ">Buttons</h2>
      <div className="p-5 flex flex-row justify-start flex-wrap items-center gap-1">
        <Button color="black" variant="primary">
          Button
        </Button>
        <Button variant="discrete">Button</Button>
        <Button color="purple" variant="primary">
          Button
        </Button>
        <Button color="green" variant="primary">
          Button
        </Button>
        <Button color="red" variant="primary">
          Button
        </Button>
        <Button color="blue" variant="primary">
          Button
        </Button>
      </div>
    </>
  );
}
