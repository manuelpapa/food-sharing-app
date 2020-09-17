import React from "react";
import PropTypes from "prop-types";

function List({ children }) {
  return <nav>{children}</nav>;
}
List.propTypes = {
  children: PropTypes.element.isRequired,
};

export default List;
