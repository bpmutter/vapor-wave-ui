import React from "react";
import { Box } from "rebass";
export default function Hr({ ...props }) {
  return (
    <Box {...props}>
      <hr className="neon-hr" />
    </Box>
  );
}
