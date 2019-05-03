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

const ImageStyle = styled(AuthorStyle)`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={"" /* image source goes here */} />
        </div>
        <span>By {/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
