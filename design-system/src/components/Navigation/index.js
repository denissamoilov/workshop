
import { string, element } from "prop-types";
import React from "react";
import styled from "styled-components";

/* Navigation
 *
 * TODO: add component description
 */
const Navigation = ({label, prependChild, appendChild, ...props}) => {
  return (
    <StyledNavigation {...props}>
      {prependChild && prependChild}
      {label && <h4>{label}</h4>}
      {appendChild && appendChild}
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

Navigation.propTypes = {
  label: string,
  prependChild: element,
  appendChild: element,
}

export default Navigation;
