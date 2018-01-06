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

import {UrlPattern} from "jec-commons";

/**
 * Representation of a static resources collection for a JEC application.
 */
export interface StaticResources {

  /**
   * Returns the <code>UrlPattern</code> that stores references to the  
   * ressources managed by this interceptor.
   * 
   * @return {UrlPattern} the <code>UrlPattern</code> that stores references to  
   *                     the ressources managed by this interceptor.
   */
  getUrlPattern():UrlPattern;
}