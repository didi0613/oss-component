import React from "react";
import Demo from "electrode-demo-index";
import * as libraryScope from "../src/index";
import "./demo.css";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);

const components = [
  {
    examples: [
      {
        type: "playground",
        code: require("raw-loader!./examples/oss-component.example")
      } // any additional examples here
    ]
  } // any additional components here
];

const demo = () => <Demo libraryScope={libraryScope} components={components} />;

export default demo;
