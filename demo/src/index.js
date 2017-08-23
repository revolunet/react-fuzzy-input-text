import React from "react";
import { render } from "react-dom";
import GithubCorner from "react-github-corner";

import cities from "./cities.json";
import FuzzyInput from "../../src";

const Demo = () => (
  <div>
    <h1>react-fuzzy-input-text</h1>
    <p> Using 660 biggest cities from <a href="https://github.com/mahemoff/geodata">mahemoff/geodata</a> dataset</p>
    <p>You can use up/down keys to navigate in the results and enter to select</p>
    <FuzzyInput placeholder="Search city" items={ cities.map(c => c.name) } onChange={ item => alert(item) } />
    <GithubCorner href="http://github.com/revolunet/react-fuzzy-input-text" />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
