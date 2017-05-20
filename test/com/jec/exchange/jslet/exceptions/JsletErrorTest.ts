//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
import {JsletError} from "../../../../../../src/com/jec/exchange/jslet/exceptions/JsletError";

// Test:
describe("JsletError", ()=> {

  describe("instanceOf(Error)", ()=> {
    it("JsletError should extend Error", function() {
      let error:JsletError = new JsletError(null);
      expect(error).to.be.instanceOf(Error);
    });
  });

  describe("#message", ()=> {
    it("should return the same string as passed in the class constructor", function() {
      let error:JsletError = new JsletError(ERROR_MSG);
      expect(error.message).to.equal(ERROR_MSG);
    });
  });
});

// Utilities:
const ERROR_MSG:string = "invalid jslet";