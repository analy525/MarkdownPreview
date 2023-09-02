import React, { Component } from "react";
import "./Previewer.css";
import "highlight.js/styles/a11y-dark.css";
import { marked } from "marked";
marked("*foo*", { gfm: true, async: true });
<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewMaximized: false,
    };
    this.previewMaximized = this.previewMaximized.bind(this);
  }

  previewMaximized() {
    this.setState((state) => {
      if (state.previewMaximized === true) {
        return { previewMaximized: false };
      } else {
        return { previewMaximized: true };
      }
    });
  }
  render() {
    if (!this.state.previewMaximized) {
      return (
        <div className="Previewer">
          <header className="Previewer-Header">
            <i class="fa fa-free-code-camp"></i>
            Previewer
            <i onClick={this.previewMaximized} class="fa fa-arrows-alt"></i>
          </header>

          <div
            className="preview"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(this.props.input, {
                gfm: true,
                breaks: true,
              }),
            }}
          />
        </div>
      );
    } else {
      return (
        <div
          className="Previewer"
          style={{
            height: "1350px",
            position: "absolute",
            top: -70,
          }}
        >
          <header className="Previewer-Header">
            <i class="fa fa-free-code-camp"></i>
            Previewer
            <i onClick={this.previewMaximized} class="fa fa-compress"></i>
          </header>

          <div
            className="preview"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(this.props.input, {
                gfm: true,
                breaks: true,
              }),
            }}
          />
        </div>
      );
    }
  }
}

export default Previewer;
