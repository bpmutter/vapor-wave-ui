import React from "react";
import { Box as RebassBox } from "rebass";
import PropTypes from "prop-types";
import theme from "../theme";

const darkStyle = {
  backgroundColor: theme.colors.darkBackground,
  color: theme.colors.lightText,
};

export default function Box({ children, dark, ...props }) {
  return (
    <RebassBox style={dark ? darkStyle : null} {...props}>
      {children}
    </RebassBox>
  );
}

Box.propTypes = {
  dark: PropTypes.bool,
};
