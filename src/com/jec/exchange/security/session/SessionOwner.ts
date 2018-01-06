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

import {SecurityRole} from "../roles/SecurityRole";
import {SecurityConstraint} from "../SecurityConstraint";

/**
 * The <code>SessionOwner</code> interface represents the authenticated owner of  
 * a session in a JEC application.
 */
export interface SessionOwner {

  /**
   * Returns the alias of the session owner.
   * 
   * @return {string} the alias of the session owner.
   */
  getAlias():string;
  
  /**
   * Returns a boolean that indicates whether the session owner has roles for 
   * accessing resources protected by this specified security constraint
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @param {SecurityConstraint} securityConstraint the security constraint for
   *                                                which to validate roles.
   * @return {boolean} <code>true</code> whether the session owner is authorized  
   *                   to access the resources protected by this security 
   *                   constraint; <code>false</code> otherwhise.
   */
  isGranted(securityConstraint:SecurityConstraint):boolean;
}