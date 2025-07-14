import React from "react";
import Badge from "../ui/Badge";

export default function BadgesTab() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-rows-4 gap-4">
        <Badge color="green" variant="square">
          Badge
        </Badge>
        <Badge color="red" variant="square">
          Badge
        </Badge>
        <Badge color="yellow" variant="square">
          Badge
        </Badge>
        <Badge color="grey" variant="square">
          Badge
        </Badge>
        <Badge color="blue" variant="square">
          Badge
        </Badge>
        <Badge color="indigo" variant="square">
          Badge
        </Badge>
        <Badge color="purple" variant="square">
          Badge
        </Badge>
        <Badge color="pink" variant="square">
          Badge
        </Badge>
        <Badge color="green" variant="pill">
          Badge
        </Badge>
        <Badge color="red" variant="pill">
          Badge
        </Badge>
        <Badge color="yellow" variant="pill">
          Badge
        </Badge>
        <Badge color="grey" variant="pill">
          Badge
        </Badge>
        <Badge color="blue" variant="pill">
          Badge
        </Badge>
        <Badge color="indigo" variant="pill">
          Badge
        </Badge>
        <Badge color="purple" variant="pill">
          Badge
        </Badge>
        <Badge color="pink" variant="pill">
          Badge
        </Badge>
      </div>
    </>
  );
}
