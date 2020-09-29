import React from "react";
import PropTypes from "prop-types";

function List({ children }) {
  return <nav>{children}</nav>;
}
List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
