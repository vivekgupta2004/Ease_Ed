import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class App extends React.Component {
  render() {

    const {complition}=this.props;
    return (
      <div className="z-10 rotate-90 mt-[60vh]">
        {/* Your other components and JSX here */}
        <CustomProgressBar complition={complition} />
      </div>
    );
  }
}

class CustomProgressBar extends React.Component {
  render() {
    const {complition}=this.props;
    return (
      <ProgressBar
        percent={complition>0 ? complition : 0 && complition>100 ? 100 : complition}
        filledBackground="#15803D" 
        height="2px"
      />
    );
  }
}

export default App;
