import "./Editor.css";
import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorMaximized: false,
    };
    this.editorMaximized = this.editorMaximized.bind(this);
  }

  editorMaximized() {
    this.setState((state) => {
      if (state.editorMaximized === true) {
        return { editorMaximized: false };
      } else {
        return {
          editorMaximized: true,
        };
      }
    });
  }

  render() {
    if (!this.state.editorMaximized) {
      return (
        <div className="Editor">
          <header className="Editor-Header">
            <i class="fa fa-free-code-camp"></i>Editor
            <i onClick={this.editorMaximized} class="fa fa-arrows-alt"></i>
          </header>
          <textarea
            className="editor"
            id="editor"
            value={this.props.input}
            onChange={this.props.handleChange}
          ></textarea>
        </div>
      );
    } else {
      return (
        <div
          className="Editor"
          style={{
            height: "100vh",

            top: 0,
          }}
        >
          <header className="Editor-Header">
            <i class="fa fa-free-code-camp"></i>Editor
            <i onClick={this.editorMaximized} class="fa fa-compress"></i>
          </header>
          <textarea
            className="editor"
            id="editor"
            value={this.props.input}
            onChange={this.props.handleChange}
            style={{
              height: "99vh",

              top: 43,
              overflow: "hidden",
            }}
          ></textarea>
        </div>
      );
    }
  }
}
export default Editor;
