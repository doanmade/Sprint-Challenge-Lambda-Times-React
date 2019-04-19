import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderStyle = styled.div`
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  // width: 100%;
  // height: 120px;
  // margin-top: 44px;
  // padding-bottom: 15px;
`;

const DataStyle = styled.div`
  margin-left: 25px;
  flex: 1;
`;

const TempStyle = styled.div`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <DataStyle>SMARCH 32, 2018</DataStyle>
        <h1>Lambda Times</h1>
        <TempStyle>98°</TempStyle>
      </div>
    </HeaderStyle>
  );
};

export default Header;
