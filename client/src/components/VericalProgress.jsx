import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class App extends React.Component {
  render() {
    return (
      <div className="z-10 rotate-90 mt-[60vh]">
        {/* Your other components and JSX here */}
        <CustomProgressBar />
      </div>
    );
  }
}

class CustomProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={60}
        filledBackground="#15803D" 
        height="2px"
      />
    );
  }
}

export default App;
