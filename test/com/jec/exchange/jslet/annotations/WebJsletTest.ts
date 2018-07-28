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
import * as sinon from "sinon";
import {DecoratorConnectorManager, JcadContextManager, JcadContext} from "jec-commons";
import {JsletConnectorRefs} from "../../../../../../src/com/jec/exchange/jslet/jcad/JsletConnectorRefs";

// Annotation to test:
import * as WebJsletAnnotation from "../../../../../../src/com/jec/exchange/jslet/annotations/WebJslet";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/WebJsletTestUtils";
import * as jsletParams from "../../../../../../utils/test-utils/classes/TestJsletParams";

// Test:
describe("WebJslet", ()=> {

  let context:JcadContext = null;
  let getContextSpy:any = null;
  let getDecoratorSpy:any = null;
  let annotationSpy:any = null;
  let decorateSpy:any = null;

  before(()=> {
    getContextSpy = sinon.spy(JcadContextManager.getInstance(), "getContext");
    getDecoratorSpy =
             sinon.spy(DecoratorConnectorManager.getInstance(), "getDecorator");
    annotationSpy = sinon.spy(WebJsletAnnotation, "WebJslet");
    decorateSpy = sinon.spy(utils.TEST_DECORATOR, "decorate");
    context = utils.initContext();
    utils.buildClassRef();
  });

  after(()=> {
    utils.resetContext(context);
    sinon.restore();
  });

  beforeEach(()=> {
    utils.buildClassRef();
  });

  describe("@WebJslet", ()=> {

    it("should invoke the JcadContextManager with the JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF reference", function() {
      sinon.assert.calledOnce(getContextSpy);
      sinon.assert.calledWith(
        getContextSpy, JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF
      );
    });

    it("should invoke the DecoratorConnectorManager with the JsletConnectorRefs.AFTER_CONNECTOR_REF reference and the correct JCAD context", function() {
      sinon.assert.calledOnce(getDecoratorSpy);
      sinon.assert.calledWith(
        getDecoratorSpy, JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF, context
      );
    });
    
    it("should invoke the annotation decorator with the specified parameters", function() {
      sinon.assert.calledOnce(annotationSpy);
      //sinon.assert.calledWith(getDecoratorSpy, jsletParams.PARAMS);
    });
    
    it("should invoke the registered decorator with the specified parameters", function() {
      sinon.assert.calledOnce(decorateSpy);
      //sinon.assert.calledWith(getDecoratorSpy, jsletParams.PARAMS);
    });
  });
});