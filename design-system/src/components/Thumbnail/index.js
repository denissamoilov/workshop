
import { string } from "prop-types";
import React from "react";
import styled from "styled-components";

/* Thumbnail
 *
 * TODO: add component description
 */
const Thumbnail = ({src, alt, ...props}) => {
  return <StyledThumbnail src={src} alt={alt} />
};

export const StyledThumbnail = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;

Thumbnail.propTypes = {
  alt: string,
  src: string,
}

export default Thumbnail;
