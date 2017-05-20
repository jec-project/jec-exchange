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

import {SessionId} from "../session/SessionId";

/**
 * The interface that you must implement for creating data transfert objects
 * used to manage session errors.
 */
export interface SessionError {

  /**
   * Returns the ID of the session that throws the error.
   * 
   * @return {SessionId} the ID of the session that throws the error.
   */
  getSessionId():SessionId;

  /**
   * Returns the type of the session error. Valid values are constants of the
   * <code>SessionErrorType</code> class.
   * 
   * @return {string} the type of the session error.
   */
  getErrorType():string;
  
  /**
   * Returns a string that contains the details of the session error.
   * 
   * @return {string} a string that contains the details of the session error.
   */
  getMessage():string;
}