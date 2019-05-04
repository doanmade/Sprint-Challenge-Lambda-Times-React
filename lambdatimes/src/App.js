import React from "react";
import Content from "./components/Content/Content";
import Header from "./components/Header";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default App;
