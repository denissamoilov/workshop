
import React from "react";
import styled from "styled-components";

/* PageTitle
 *
 * TODO: add component description
 */
const PageTitle = ({children, ...props}) => {
  return <StyledPageTitle {...props}>{children}</StyledPageTitle>;
};

export const StyledPageTitle = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

export default PageTitle;
