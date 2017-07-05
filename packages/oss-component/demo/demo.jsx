import React from "react";
import Demo from "electrode-demo-index";
import Playground from "component-playground";
import OssComponent from "../src/components/oss-component";
import { addLocaleData, IntlProvider } from 'react-intl';

import * as libraryScope from "../src/index";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

const components = [
  {
    examples: [
      {
        type: "playground",
        code: require("raw-loader!./examples/oss-component.example"),
        noRender: true
      } // any additional examples here
    ]
  } // any additional components here
];
var componentExample = require("raw-loader!./examples/oss-component.example");

const localScope = {IntlProvider, messages, locale};
const demo = () => <Demo collapsableCode={true} scope={localScope} libraryScope={libraryScope} components={components} />;

export default demo;
