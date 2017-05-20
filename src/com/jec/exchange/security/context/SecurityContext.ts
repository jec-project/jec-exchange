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

import {SecurityRole} from "../roles/SecurityRole";
import {SecurityConstraint} from "../SecurityConstraint";
import {StaticResources} from "../StaticResources";

/**
 * Provides the API for security contexts of JEC domain containers.
 */
export interface SecurityContext {

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Adds a security role to this security context.
   *
   * @param {SecurityRole} role the security role to add.
   */
  addSecurityRole(role:SecurityRole):void;

  /**
   * Returns the registered security role with the specified name.
   *
   * @param {string} name the name of the security role to return.
   * @returns {SecurityRole} the <code>SecurityRole</code> instance with the 
   *                         specified name.
   */
  getSecurityRole(name:string):SecurityRole;

  /**
   * Adds a security constraint to this security context.
   *
   * @param {SecurityConstraint} constraint the security constraint to add.
   */
  addSecurityConstraint(constraint:SecurityConstraint):void;

  /**
   * Returns the registered security constraint with the specified resource URL.
   *
   * @param {string} url the URL of the security constraint to return.
   * @returns {SecurityConstraint} the <code>SecurityConstraint</code> instance  
   *                               with the specified URL.
   */
  getSecurityConstraint(url:string):SecurityConstraint;

  /**
   * Adds a static resources interceptor to this security context.
   *
   * @param {StaticResources} resources the static resources interceptor to add.
   */
  addStaticResources(resources:StaticResources):void;

  /**
   * Returns the registered static resources interceptor for the specified
   * resource URL.
   *
   * @param {string} url the URL of the static resources interceptor to return.
   * @returns {SecurityConstraint} the <code>StaticResources</code> instance for  
   *                               the specified URL.
   */
  getStaticResources(url:string):StaticResources;

  /**
   * Returns the context root of the domain container associated with this
   * <code>SecurityContext</code>.
   *
   * @returns {string} the context root of the domain container associated with
   *                   this <code>SecurityContext</code>.
   */
  getContextRoot():string;
}
