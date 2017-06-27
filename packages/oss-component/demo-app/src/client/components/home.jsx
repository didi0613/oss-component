import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import Demo from "../../../../demo/demo.jsx";

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div>
          <p>Some content in same parent div as</p>
          <Demo />
        </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
