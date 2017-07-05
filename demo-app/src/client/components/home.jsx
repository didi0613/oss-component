import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import OssComponentDemo from "../../../../packages/oss-component/demo/demo";

const locale = "en";

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div>
          <p>Some content in same parent div as</p>
          <OssComponentDemo />
        </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
