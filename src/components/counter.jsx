import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // product: 0,
    tags: [1, 2, 3, 4]
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

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log("Increment Clicked", this); //without constructor it logs as undefined, Arrow function overcomes it. On clicking increment only the span gets updated(Virtual Dom). This didn't affect the other Dom elements
  // };

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontStyle: "italic" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && " Please create a new tag!"}
      </div>
    );
    //render is a tree with 3 element (react element on the top (div) and 2 childrens (span and button))
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
