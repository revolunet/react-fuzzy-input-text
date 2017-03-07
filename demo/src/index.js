import React from "react";
import { render } from "react-dom";
import GithubCorner from "react-github-corner";
import FuzzyInput from "../../src";

const PRODUCTS = [
  "iPhone 4",
  "iPhone 5",
  "iPhone 6",
  "iPhone 7",
  "iPad 1",
  "iPad 2",
  "iPad 3",
  "iPad 4",
  "iPad Air",
  "iPad Pro",
  "Motorola G",
  "Motorola G 2",
  "Motorola X",
  "Nexus 1",
  "Nexus 2",
  "Nexus 3",
  "Nexus 4",
  "Google pixel"
];

const Demo = () => (
  <div>
    <h1>react-fuzzy-input-text</h1>
    <FuzzyInput placeholder="Search device" items={ PRODUCTS } onChange={ item => alert(item) } />
    <GithubCorner href="http://github.com/revolunet/react-fuzzy-input-text" />
  </div>
);

render(<Demo />, document.querySelector("#demo"));
