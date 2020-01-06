import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this); //without constructor it logs as undefined, Arrow function overcomes it.
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontStyle: "italic" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && " Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
