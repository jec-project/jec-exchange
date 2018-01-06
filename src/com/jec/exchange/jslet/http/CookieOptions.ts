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

/**
 * This interface defines the options for a cookie object.
 */
export interface CookieOptions {

  /**
   * Domain name for the cookie. Default value is the domain name of the
   * application.
   */
  domain?:string;
  
  /**
   * A synchronous function used for cookie value encoding. Default value is
   * <code>encodeURIComponent</code>.
   */
  encode?:Function;
  
  /**
   * Expiry date of the cookie in GMT. Creates a session cookie if
   * <code>null</code>.
   */
  expires?:Date;
  
  /**
   * Indicates whether the cookie is accessible only by the web server
   * (<code>true</code>), or not (<code>false</code>).
   */
  httpOnly?:boolean;
  
  /**
   * A convenient option for setting the expiry time relative to the current
   * time in milliseconds.
   */
  maxAge?:number;
  
  /**
   * The path value for the cookie. Default value is <code>/</code>.
   */
  path?:string;
  
  /**
   * Indicates whether the cookie must be used with HTTPS only
   * (<code>true</code>), or not (<code>false</code>).
   */
  secure?:boolean;
  
  /**
   * Indicates whether the the cookie should be signed (<code>true</code>),
   * or not (<code>false</code>).
   */
  signed?:boolean;
  
  /**
   * Value of the <code>SameSite</code> <code>Set-Cookie</code> attribute.
   */
  sameSite?:string|boolean;
}