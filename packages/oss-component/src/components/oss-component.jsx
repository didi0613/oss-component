import React from "react";
import propTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/oss-component.css";
import messages from "../lang/default-messages";

export default class OssComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

OssComponent.displayName = "OssComponent";

OssComponent.propTypes = { };

OssComponent.defaultProps = { };
