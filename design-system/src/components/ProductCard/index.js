
import React from "react";
import styled from "styled-components";

import Thumbnail from "../Thumbnail";
import { string } from "prop-types";

/* ProductCard
 *
 * TODO: add component description
 */
const ProductCard = ({thumbSrc, thumbAlt, title, price, ...props}) => {
  return (
    <StyledProductCard {...props}>
      <Thumbnail src={thumbSrc} alt={thumbAlt} />
      <h4>{title}</h4>
      <StyledP>{price}</StyledP>
    </StyledProductCard>
  );
};

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  color: #f15223;
  font-weight: 700;
  margin-top: 8px;
`;

ProductCard.propTypes = {
  thumbSrc: string,
  thumbAlt: string,
  title: string,
  price: string,
}

export default ProductCard;
