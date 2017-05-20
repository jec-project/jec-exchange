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

import {WebJsletParams} from "./core/WebJsletParams";
import {JsletConnectorRefs} from "../jcad/JsletConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// CAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@WebJslet</code> decorator defines a jslet class ine the JEC
 * specification.
 *
```javascript
WebJslet({
     name: "Status",
     urlPatterns: ["/status"],
     template: "/views/status.ejs
 })
```
 * @param {WebJsletParams} params the parameters used to initialize this jslet.
 */
export function WebJslet(params:WebJsletParams):Function {

  //////////////////////////////////////////////////////////////////////////////
  // Overrides
  //////////////////////////////////////////////////////////////////////////////

  return function(target:any):Function {
    
    ////////////////////////////////////////////////////////////////////////////
    // CAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
                    CTXM.getContext(JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF);
    return DCM.getDecorator(JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF, ctx)
              .decorate(target, params);
  }
}
