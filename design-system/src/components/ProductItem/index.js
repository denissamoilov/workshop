
import React from "react";
import styled from "styled-components";

import Thumbnail from "../Thumbnail";
import { string } from "prop-types";

/* ProductItem
 *
 * TODO: add component description
 */
const ProductItem = ({thumbSrc, thumbAlt, title, price, ...props}) => {
  return (
    <StyledProductItem {...props}>
      <Thumbnail src={thumbSrc} alt={thumbAlt} />
      <h4>{title}</h4>
      <StyledP>{price}</StyledP>
    </StyledProductItem>
  );
};

const StyledProductItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  color: #f15223;
  font-weight: 700;
  margin-top: 8px;
`;

ProductItem.propTypes = {
  thumbSrc: string,
  thumbAlt: string,
  title: string,
  price: string,
}

export default ProductItem;
