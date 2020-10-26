import React from "react";
import { Button } from "react-desktop";

export default class Comp1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isComp: true,
      products: [],
      bgColor: "red",
    };

    this.clickButtonColor = this.clickButtonColor.bind(this);
  }

  clickButtonColor = (name) => {
    console.log("Alert is clicked > " + name);

    this.state.bgColor === "red"
      ? this.setState({ bgColor: "blue" })
      : this.setState({ bgColor: "red" });
  };

  render() {
    return (
      <div id="comp1">
        {this.state.isComp ? this.props.id : "No name"}
        <button onClick={() => this.clickButtonColor(this.props.id)}>
          Click console log
        </button>
        <div className="class1 clas2">
          <p>{this.props.title}</p>
        </div>

        <Button
          style={{ backgroundColor: this.state.bgColor, color: "white" }}
          onClick={() => this.clickButtonColor("Clicked!")}
        >
          Press me!
        </Button>
      </div>
    );
  }
}
