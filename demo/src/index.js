import React from "react";
import { render } from "react-dom";
import GithubCorner from "react-github-corner";
import cities from "all-the-cities/cities.json";

import FuzzyInput from "../../src";



const Demo = () => (
  <div>
    <h1>react-fuzzy-input-text</h1>
    <p>Search city example using <a href="https://github.com/zeke/all-the-cities">all-the-cities</a> dataset</p>
    <FuzzyInput placeholder="Search city" items={ cities.map(c => c.name) } onChange={ item => alert(item) } />
    <GithubCorner href="http://github.com/revolunet/react-fuzzy-input-text" />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
