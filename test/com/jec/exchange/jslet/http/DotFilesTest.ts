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
import {DotFiles} from "../../../../../../src/com/jec/exchange/jslet/http/DotFiles";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/DotFilesTestUtils";

// Test:
describe("DotFiles", ()=> {

  describe("#ALLOW", ()=> {
    it("ALLOW should return 'allow'", function() {
      expect(DotFiles.ALLOW).to.equal(utils.ALLOW);
    });
  });
  
  describe("#DENY", ()=> {
    it("DENY should return 'deny'", function() {
      expect(DotFiles.DENY).to.equal(utils.DENY);
    });
  });
  
  describe("#IGNORE", ()=> {
    it("IGNORE should return 'ignore'", function() {
      expect(DotFiles.IGNORE).to.equal(utils.IGNORE);
    });
  });
});
