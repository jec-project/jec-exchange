//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import "mocha";
import {expect} from "chai";

// Class to test:
import {AuthMethod} from "../../../../../../src/com/jec/exchange/security/login/AuthMethod";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/AuthMethodTestUtils";

// Test:
describe("AuthMethod", ()=> {

  describe("#NONE", ()=> {
    it("NONE should return 'none'", function() {
      expect(AuthMethod.NONE).to.equal(utils.NONE);
    });
  });
  
  describe("#FORM", ()=> {
    it("FORM should return 'form'", function() {
      expect(AuthMethod.FORM).to.equal(utils.FORM);
    });
  });
  
  describe("#EJP_FORM", ()=> {
    it("EJP_FORM should return 'ejp-form'", function() {
      expect(AuthMethod.EJP_FORM).to.equal(utils.EJP_FORM);
    });
  });
  
  describe("#BASIC", ()=> {
    it("BASIC should return 'basic'", function() {
      expect(AuthMethod.BASIC).to.equal(utils.BASIC);
    });
  });
  
  describe("#DIGEST", ()=> {
    it("DIGEST should return 'digest'", function() {
      expect(AuthMethod.DIGEST).to.equal(utils.DIGEST);
    });
  });
});
