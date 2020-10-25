import React from "react";
import { Link as RebassLink } from "rebass";
export default function Link({ children, ...props }) {
  return (
    <RebassLink
      {...props}
      className={"glow-link"}
      sx={{
        color: "muted",
        fontWeight: "bold",
        textDecoration: "none",
      }}
    >
      {children}
    </RebassLink>
  );
}
