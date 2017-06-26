import React from "react";
import Demo from "electrode-demo-index";
import * as libraryScope from "../pacakges/oss-component/src/index";

const locale = "en";
const messages = require(`../pacakges/oss-component/src/lang/${locale}.json`);

const components = [
  {
    title: "OSS Component",
    examples: [
      {
        title: "Example Title",
        type: "playground",
        code: require("raw!./examples/oss-component.example")
      } // any additional examples here
    ]
  } // any additional components here
];
const localScope = {IntlProvider, messages, locale};

const demo = () => <Demo libraryScope={libraryScope} components={components} />;
console.log("xxxxxxx demo", demo);
export default demo;
