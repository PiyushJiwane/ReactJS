import React, { Component } from "react";

class HeadingHover extends Component {
  render() {
    const { count, ClickHandler } = this.props;
    return (
      <div>
        <h3 onMouseOver={ClickHandler}>
          Hello, Piyush Jiwane hover {count} time
        </h3>
      </div>
    );
  }
}

export default HeadingHover;
