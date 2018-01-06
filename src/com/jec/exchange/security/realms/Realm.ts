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

import {RealmConnector} from "./RealmConnector";
import {SessionOwner} from "../session/SessionOwner";
import {Credentials} from "../Credentials";
import {AuthenticationError} from "../exceptions/AuthenticationError"

/**
 * The <code>Realm</code> interface provides the API for managing realm 
 * information in a JEC domain container.
 */
export interface Realm {
  
  /**
   * Returns the type of realm for this realm. Valid values are constants of the
   * <code>RealmType</code> class.
   * 
   * @return {string} a constant of the <code>RealmType</code> class.
   */
  getRealmType():string;

  /**
   * Returns the reference to the <code>RealmConnector</code> instance for this 
   * realm object.
   * 
   * @return {RealmConnector} the reference to the <code>RealmConnector</code> 
   *                          instance for this realm object.
   */
  getRealmConnector():RealmConnector;

  /**
   * Asynchronously authenticates the specified crendentials.
   *
   * @param {Credentials} crendentials user's credentials to authenticate for
   *                                   this realm.
   * @param {Function} success the callback method called when the crendentials
   *                           are authenticated.
   * @param {Function} error the callback method called when the crendentials
   *                         are not authenticated. The callback method must 
   *                         specify an <code>error</code> object parameter.
   */
  authenticate(credentials:Credentials, 
                                    success:(sessionOwner:SessionOwner)=>void,
                                    error:(err:AuthenticationError)=>void):void;
}