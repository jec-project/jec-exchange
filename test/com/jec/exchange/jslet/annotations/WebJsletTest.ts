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
import * as chai from "chai";
import * as spies from "chai-spies";
import {DecoratorConnectorManager, JcadContextManager, JcadContext} from "jec-commons";
import {JsletConnectorRefs} from "../../../../../../src/com/jec/exchange/jslet/jcad/JsletConnectorRefs";

// Annotation to test:
import * as WebJsletAnnotation from "../../../../../../src/com/jec/exchange/jslet/annotations/WebJslet";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/WebJsletTestUtils";
import * as jsletParams from "../../../../../../utils/test-utils/classes/TestJsletParams";

// Chai declarations:
const expect:any = chai.expect;
chai.use(spies);

// Test:
describe("WebJslet", ()=> {

  let context:JcadContext = null;

  before(()=> {
    context = utils.initContext();
  });

  after(()=> {
    utils.resetContext(context);
  });

  beforeEach(()=> {
    utils.buildClassRef();
  });

  describe("@WebJslet", ()=> {

    let ctxmSpy:any = chai.spy.on(JcadContextManager.getInstance(), "getContext");
    let dcmSpy:any = chai.spy.on(DecoratorConnectorManager.getInstance(), "getDecorator");
    let decoratorSpy:any = chai.spy.on(utils.TEST_DECORATOR, "decorate");
    let webJsletSpy:any = chai.spy.on(WebJsletAnnotation, "WebJslet");
    
    it("should invoke the JcadContextManager with the JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF reference", function() {
      expect(ctxmSpy).to.have.been.called.with(JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF);
    });

    it("should invoke the DecoratorConnectorManager with the JsletConnectorRefs.AFTER_CONNECTOR_REF reference and the correct JCAD context", function() {
      expect(dcmSpy).to.have.been.called.with(JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF, context);
    });
    
    it("should invoke the annotation decorator with the specified parameters", function() {
      expect(webJsletSpy).to.have.been.called.with(jsletParams.PARAMS);
    });
    
    it("should invoke the registered decorator with the specified parameters", function() {
      expect(decoratorSpy).to.have.been.called.with(jsletParams.PARAMS);
    });
  });
});