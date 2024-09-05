import React from "react";
class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello world!",
    };
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default TestClass;
