/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Avatar, PageTitle, ProductItem, Navigation, Layout } from "design-system";

import avatarImg from "../assets/avatar.png";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const Home = () => {
  const productsList = [{
      thumbSrc: item1Img,
      thumbAlt: "",
      title: "Nike Air Force 1 '07",
      price: "€95.00"
    },
    {
      thumbSrc: item2Img,
      thumbAlt: "",
      title: "Nike Air Shadow Force",
      price: "€105.00"
    },
    {
      thumbSrc: item3Img,
      thumbAlt: "",
      title: "Nike Air Force 1 '07",
      price: "€95.00"
    },
    {
      thumbSrc: item4Img,
      thumbAlt: "",
      title: "Nike Air Force 1 '07",
      price: "€95.00"
    },
  ]
  return (
    <Layout>
      <Navigation 
        prependChild={<Avatar src={avatarImg}/>}
        appendChild={
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        }
        label=""
      />
      
      <PageTitle>Store</PageTitle>

      <StyledDiv3>
        <h4>All Product</h4>

        <StyledDiv4>
          <StyledButton color="transparent">
            <Icon name="viewItem" width={24} height={16} />
          </StyledButton>
          <StyledButton color="transparent">
            <Icon name="viewGrid" width={24} height={16} />
          </StyledButton>
          <StyledBorder />
          <StyledButton color="transparent">
            <Icon name="filter" width={24} height={16} />
          </StyledButton>
        </StyledDiv4>
      </StyledDiv3>
      <StyledDiv5>
        {productsList.map((item, index) => (
          <ProductItem key={index} thumbSrc={item.thumbSrc} thumbAlt={item.thumbAlt} title={item.title} price={item.price} />
        ))}
      </StyledDiv5>
    </Layout>
  );
};

export default Home;
