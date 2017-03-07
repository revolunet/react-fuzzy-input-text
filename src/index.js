import React from "react";

import HighLight from "./Highlight";
import filterItems from "./fuzzy";

const textStyle = {
  fontSize: 16,
  fontFamily: "Roboto, Verdana, Arial"
};

class FuzzyInput extends React.Component {
  state = {
    query: "",
    resultIndex: 0
  };
  onInput(e) {
    this.setState({
      query: e.target.value
    });
  }
  onKeyDown(e) {
    if ((this.state.query && e.keyCode === 9) || e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      this.setState(
        prevState => ({
          query: this.getResult(prevState),
          resultIndex: 0
        }),
        () => {
          if (this.props.onChange) {
            this.props.onChange(this.getResult(this.state));
          }
        }
      );
    } else if (this.state.query && e.keyCode === 38) {
      e.preventDefault();
      e.stopPropagation();
      this.setState(
        prevState => ({
          resultIndex: Math.max(0, prevState.resultIndex - 1)
        }),
        () => {}
      );
    } else if (this.state.query && e.keyCode === 40) {
      e.preventDefault();
      e.stopPropagation();
      this.setState(
        prevState => ({
          resultIndex: Math.min(
            this.getResults(prevState.query).length - 1,
            prevState.resultIndex + 1
          )
        }),
        () => {}
      );
    }
  }
  getResults() {
    return filterItems(this.props.items, this.state.query) || [];
  }
  getResult(state) {
    const results = this.getResults();
    if (results.length && this.state.resultIndex < results.length) {
      return results[this.state.resultIndex];
    }
  }
  render() {
    const result = this.getResult(this.state);
    let query = this.state.query;
    if (query.length === 1) {
      query = query.toUpperCase();
    }
    const isPerfectMatch = result && result.length === query.length;
    const inputStyle = {
      color: (result && !isPerfectMatch && "white") || "black",
      ...textStyle
    };
    const divStyle = {
      position: "relative"
    };

    return (
      <div style={divStyle}>
        <input
          placeholder={this.props.placeholder}
          onKeyDown={this.onKeyDown.bind(this)}
          type="text"
          style={inputStyle}
          value={query}
          onChange={this.onInput.bind(this)}
        />
        {!isPerfectMatch &&
          <HighLight text={result} query={query} style={textStyle} />}
      </div>
    );
  }
}

export default FuzzyInput;
