
import { string } from "prop-types";
import React from "react";
import styled from "styled-components";

/* Avatar
 *
 * TODO: add component description
 */
const Avatar = ({src, ...props}) => <StyledAvatar src={src} />;

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

Avatar.propTypes = {
  src: string,
}

export default Avatar;
