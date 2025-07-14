import React from "react";
import Banner from "../ui/Banner";

export default function BannersTab() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Banner status="success" size="100%"></Banner>
        <Banner size="100%"></Banner>
        <Banner status="warning" size="100%"></Banner>
        <Banner status="error" size="100%"></Banner>
        <Banner status="success" size="100%">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, porro!
        </Banner>
        <Banner>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam
          atque cumque.
        </Banner>
        <Banner status="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          veniam!
        </Banner>
        <Banner status="error"></Banner>
      </div>
    </>
  );
}
