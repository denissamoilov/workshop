import React from "react";
import styled from "styled-components";
import { Button, Icon, Navigation, PageTitle, Layout } from "design-system";
import itemImg from "../assets/item1.png";

const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv5 = styled.div`
  border-radius: 32px;
  margin-bottom: 24px;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display: block;
`;

const StyledP = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
`;
const Styledh2 = styled.h2`
  color: #f15223;
  margin-bottom: 40px;
`;
const Details = () => {
  return (
    <div>
      <Layout>
        <Navigation prependChild={
          <Button isOutline>
            <Icon name="arrowBack" />
          </Button>}
          label="Nike Air Force 1 '07 LX"
        />
        <StyledDiv4>
          <StyledDiv5>
            <StyledButton isOutline>
              <Icon name="heart" />
            </StyledButton>
            <StyledImg src={itemImg} alt="" />
          </StyledDiv5>
          <StyledP> Men's Shoe</StyledP>
          <PageTitle>
            Nike Air Force 1{"\u00A0"}'07{"\u00A0"}LX
          </PageTitle>
          <Styledh2>€95.00</Styledh2>
          <Button>Add to Cart</Button>
        </StyledDiv4>
      </Layout>
    </div>
  );
};

export default Details;
