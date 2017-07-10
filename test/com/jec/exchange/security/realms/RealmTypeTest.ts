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
import {RealmType} from "../../../../../../src/com/jec/exchange/security/realms/RealmType";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/RealmTypeTestUtils";

// Test:
describe("RealmType", ()=> {

  describe("#FILE ", ()=> {
    it("FILE  should return 'file'", function() {
      expect(RealmType.FILE ).to.equal(utils.FILE );
    });
  });
  
  describe("#LDAP ", ()=> {
    it("LDAP  should return 'ldap'", function() {
      expect(RealmType.LDAP ).to.equal(utils.LDAP );
    });
  });
  
  describe("#DB ", ()=> {
    it("EJP_DB FORM should return 'db'", function() {
      expect(RealmType.DB ).to.equal(utils.DB );
    });
  });
  
  describe("#ADMIN_FILE ", ()=> {
    it("ADMIN_FILE  should return 'admin-file'", function() {
      expect(RealmType.ADMIN_FILE ).to.equal(utils.ADMIN_FILE );
    });
  });
  
  describe("#CUSTOM ", ()=> {
    it("CUSTOM  should return 'custom'", function() {
      expect(RealmType.CUSTOM ).to.equal(utils.CUSTOM );
    });
  });
});
