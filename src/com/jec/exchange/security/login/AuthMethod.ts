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

/**
 * Contains the values of methods used to manage authentication in a JEC
 * application.
 */
export class AuthMethod {

  /**
   * Indicates that the application does not use any standard validation process
   * for authenticating users.
   */
  public static readonly NONE:string = "none";

  /**
   * Indicates that the application use a standard form validation for
   * authenticating users.
   */
  public static readonly FORM:string = "form";

  /**
   * Indicates that the application use a standard EJP form validation for
   * authenticating users.
   */
  public static readonly EJP_FORM:string = "ejp-form";
  
  /**
   * Indicates that the application use a "basic" validation for authenticating
   * users.
   */
  public static readonly BASIC:string = "basic";

  /**
   * Indicates that the application use a "digest" validation for authenticating
   * users.
   */
  public static readonly DIGEST:string = "digest";
}