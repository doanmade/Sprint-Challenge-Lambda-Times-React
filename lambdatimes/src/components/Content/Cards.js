import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Cards = props => {
  return (
    <CardContainer>
      <Card />
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </CardContainer>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
