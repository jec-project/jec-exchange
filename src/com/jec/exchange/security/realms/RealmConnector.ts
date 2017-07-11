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

import {SecurityContext} from "../context/SecurityContext";
import {Credentials} from "../Credentials";
import {UserHashModule} from "../crypto/UserHashModule";
import {SessionOwner} from "../session/SessionOwner";
import {AuthenticationError} from "../exceptions/AuthenticationError";

/**
 * The <code>RealmConnector</code> interface provides the API for creating data 
 * connectors for accessing realm storage engines.
 */
export interface RealmConnector {

  /**
   * Authenticates the specified credentials.
   * 
   * @param {Credentials} credentials the credentials to authenticate.
   * @param {Function} success the callback method called in case of success.
   *                           This method takes the reference to the
   *                           <code>SessionOwner</code> instance as parameter.
   * @param {Function} error the callback method called in case of error.
   *                       This method takes as <code>AuthenticationError</code>
   *                         instance as parameter.
   */
  authenticate(credentials:Credentials,
                                    success:(sessionOwner:SessionOwner)=>void,
                                    error:(err:AuthenticationError)=>void):void;

  /**
   * Sets the security context for this realm.
   * 
   * @param {SecurityContext} securityContext the security context associated
   *                                          with this realm.
   */
  setSecurityContext(securityContext:SecurityContext):void;

  /**
   * Sets the <code>UserHashModule</code> instance for this realm.
   * 
   * @param {UserHashModule} userHashModule the <code>UserHashModule</code> 
   *                                        instance associated with this realm.
   */
  setUserHashModule(userHashModule:UserHashModule):void;

  /**
   * Returns the <code>UserHashModule</code> instance for this realm.
   * 
   * @return {UserHashModule} the <code>UserHashModule</code> instance 
   *                          associated with this realm.
   */
  getUserHashModule():UserHashModule;
}