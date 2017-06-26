/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import OssComponent from "src/components/oss-component";

describe("components/oss-component", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<OssComponent />);
      expect(component).to.not.be.null;
    });

  });

});
