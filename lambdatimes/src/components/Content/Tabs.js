import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Tab from "./Tab";

const TabStyle = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;
const TopicsStyle = styled(TabStyle)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleStyle = styled(TopicsStyle)`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabStyle>
      <TopicsStyle>
        <TitleStyle>TRENDING TOPICS:</TitleStyle>
        {props.tabs.map((tab, i) => (
          <Tab
            tab={tab}
            key={i}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        ))}

        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </TopicsStyle>
    </TabStyle>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
