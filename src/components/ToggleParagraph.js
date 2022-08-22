import React from "react";

//When you render the element conditionally, it is called
// conditional rendering

class ToggleParagraph extends React.Component {
  constructor() {
    super();
    this.state = {
      showParagraph: true
    };
  }
  render() {
    const toggleParagraph = () => {
      this.setState({
        showParagraph: !this.state.showParagraph
      });
    };
    return (
      <>
        {/* Show This Only if showParagraph is true */}
        {/* In JSX If statements, for Loops, while Loops are not allowed */}
        {this.state.showParagraph ? <p>This is a paragraph</p> : null}

        <button onClick={toggleParagraph}>
          {this.state.showParagraph ? "Hide" : "Show"} Paragraph
        </button>
      </>
    );
  }
}

export default ToggleParagraph;
