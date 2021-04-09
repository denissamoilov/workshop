
import React from "react";
import styled from "styled-components";

/* Layout
 *
 * TODO: add component description
 */
const Layout = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export const StyledLayout = styled.div`
  padding: 64px 40px;
`;

export default Layout;
