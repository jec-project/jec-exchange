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

/*!
 * This module constains utilities used by theSessionErrorTypeTest test suite.
 */

// Utilities:
// We store constants that should be defined by the SessionErrorType class:
export const SESSION_EXPIRED:string = "errors.session.expired";
export const INVALID_SESSION_ID:string = "errors.session.invalidId";
export const SESSION_PERSISTENCE_FAILED:string = "errors.session.storageAccessError";
