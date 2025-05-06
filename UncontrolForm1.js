import { Component, createRef } from "react";

class UncontrolForm1 extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef(); // Create a reference for the input field
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevents form refresh
    alert(`Value: ${this.inputRef.current.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter Name: </label>
        <input type="text" ref={this.inputRef} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UncontrolForm1;
