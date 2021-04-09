
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
      {label && <StyledTitle>{label}</StyledTitle>}
      {appendChild && <StyledAppend>{appendChild}</StyledAppend>}
    </StyledNavigation>
  );
};

const StyledNavigation = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-start;
  margin-bottom: 40px;
`;

const StyledTitle = styled.h4`
  margin: 0 24px;
`;

const StyledAppend = styled.div`
  margin-left: auto;
`;

Navigation.propTypes = {
  label: string,
  prependChild: element,
  appendChild: element,
}

export default Navigation;
