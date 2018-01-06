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
import {SessionErrorType} from "../../../../../../src/com/jec/exchange/security/exceptions/SessionErrorType";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/SessionErrorTypeTestUtils";

// Test:
describe("SessionErrorType", ()=> {

  describe("#SESSION_EXPIRED", ()=> {
    it("SESSION_EXPIRED should return 'errors.session.expired'", function() {
      expect(SessionErrorType.SESSION_EXPIRED).to.equal(utils.SESSION_EXPIRED);
    });
  });
  
  describe("#INVALID_SESSION_ID", ()=> {
    it("INVALID_SESSION_ID should return 'errors.session.invalidId'", function() {
      expect(SessionErrorType.INVALID_SESSION_ID).to.equal(utils.INVALID_SESSION_ID);
    });
  });
  
  describe("#SESSION_PERSISTENCE_FAILED", ()=> {
    it("SESSION_PERSISTENCE_FAILED should return 'errors.session.storageAccessError'", function() {
      expect(SessionErrorType.SESSION_PERSISTENCE_FAILED).to.equal(utils.SESSION_PERSISTENCE_FAILED);
    });
  });
});
