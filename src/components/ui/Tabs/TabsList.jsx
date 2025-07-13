import React from "react";

export default function TabsList({ children, ...rest }) {
  return (
    <nav>
      <ul {...rest}>{children}</ul>
    </nav>
  );
}
