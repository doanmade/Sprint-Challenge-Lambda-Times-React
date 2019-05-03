import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const Headline = styled(CardStyle)`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorStyle = styled(CardStyle)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const ImgContainer = styled(AuthorStyle)`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const ImageStyle = styled.img`
  width: 40px;
`;

const AuthorSpan = styled(AuthorStyle)`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardStyle>
      <Headline>{props.card.headline}</Headline>
      <AuthorStyle>
        <ImgContainer>
          <ImageStyle alt={props.card.headline} src={props.card.img} />
        </ImgContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </AuthorStyle>
    </CardStyle>
  );
};

Card.propTypes = {
  card: PropTypes.object
};
// Make sure to include PropTypes.

export default Card;
