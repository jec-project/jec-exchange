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

import {BootstrapParams} from "./core/BootstrapParams";
import {BootstrapConnectorRefs} from "../jcad/BootstrapConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// CAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@Bootstrap</code> decorator defines a bootstrap class in the JEC
 * specification.
 *
```javascript
Bootstrap()
export class InitApp() implements BootstrapScript {

  public run(container:JecContainer):void {
    //Rest of the code hrer...
  }
}
```
 * @param {BootstrapParams} params the parameters used to initialize this jslet.
 */
export function Bootstrap(params?:BootstrapParams):Function {

  //////////////////////////////////////////////////////////////////////////////
  // Overrides
  //////////////////////////////////////////////////////////////////////////////

  return function(target:any):Function {
    
    ////////////////////////////////////////////////////////////////////////////
    // CAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
                CTXM.getContext(BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF);
    return DCM.getDecorator(BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF, ctx)
              .decorate(target, params);
  }
}
