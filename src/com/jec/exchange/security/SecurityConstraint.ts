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

import {UrlPattern} from "jec-commons";

/**
 * Representation of a security constraint element for a JEC application.
 */
export interface SecurityConstraint {
  
  /**
   * Returns the name of this security constraint.
   * 
   * @return {string} the name of this security constraint.
   */
  getName():string;

  /**
   * Returns the <code>UrlPattern</code> that stores references to the  
   * ressources protected by this security constraint.
   * 
   * @return {UrlMapper} the <code>UrlPattern</code> that stores references to  
   *                     the ressources protected by this security constraint.
   */
  getUrlPattern():UrlPattern;

  /**
   * Returns a boolean that indicates whether the specified role is permitted
   * access to the resources protected by this security constraint 
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the specified role is permitted 
   *                   access to the resources protected by this security 
   *                   constraint; <code>false</code> otherwhise.
   */
  hasRole(role:string):boolean;

  /**
   * Returns the redirection URL in case of security error.
   * 
   * @return {string} the redirection URL in case of security error.
   */
  getErrorUrl():string;
}