//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * The <code>SessionErrorType</code> Enum provides a collection of session
 * error types.
 */
export enum SessionErrorType {

  /**
   * Indicates that the session has expired.
   */
  SESSION_EXPIRED= "errors.session.expired",

  /**
   * Indicates that the session ID is not valid.
   */
  INVALID_SESSION_ID= "errors.session.invalidId",
  
  /**
   * Indicates that the session persistence has failed.
   */
  SESSION_PERSISTENCE_FAILED= "errors.session.storageAccessError"
}