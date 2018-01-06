//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
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
 * The <code>SessionStorageType</code> Enum contains values the specify the type
 * of <code>SessionStorage</code> implementation to use with a
 * <code>SessionContext</code> object.
 */
export enum SessionStorageType {

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Indicates that the <code>SessionStorage</code> implementation must store
   * session in a local in-memory data grid.
   */
  LOCAL = "local",
  
  /**
   * Indicates that the <code>SessionStorage</code> implementation must store
   * session in a distant in-memory data grid.
   */
  DISTANT = "distant",
  
  /**
   * Indicates that the <code>SessionStorage</code> implementation is a custom
   * connector.
   */
  CUSTOM = "custom"
}