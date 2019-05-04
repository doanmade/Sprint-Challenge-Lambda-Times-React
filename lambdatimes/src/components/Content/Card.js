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

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorStyle = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  & > span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const ImageStyle = styled.img`
  width: 40px;
`;

const Card = props => {
  return (
    <CardStyle className="card">
      <Headline className="headline">{props.card.headline}</Headline>
      <AuthorStyle className="author">
        <ImgContainer className="img-container">
          <ImageStyle alt={props.card.headline} src={props.card.img} />
        </ImgContainer>
        <span>By {props.card.author}</span>
      </AuthorStyle>
    </CardStyle>
  );
};

Card.propTypes = {
  card: PropTypes.object
};
// Make sure to include PropTypes.

export default Card;
