//import logo from "./logo.svg";
import "./App.css";
import Previewer from "./Previewer";
import Editor from "./Editor";
//import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  componentDidMount() {
    var text =
      "# Welcome to my React Markdown Previewer! \n\n## This is a sub-heading...\n### And here's some other cool stuff: \n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code: \n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \n\nThere's also [links](https://www.freecodecamp.org), and \n> Block Quotes! \n\nAnd if you want to get really crazy, even tables: \n\nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \n Your content can | be here, and it | can be here....\n And here. | Okay. | I think we get it. \n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels\n      - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, lets not forget embedded images: \n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
    this.setState({
      inputValue: text,
    });
  }

  render() {
    return (
      <div className="App">
        <Editor
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <Previewer input={this.state.inputValue} />
      </div>
    );
  }
}
export default App;
