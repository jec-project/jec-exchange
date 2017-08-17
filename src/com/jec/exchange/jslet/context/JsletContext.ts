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

import {Jslet} from "../Jslet";
import {SecurityContext} from "../../security/context/SecurityContext";
import {HttpRequest} from "../http/HttpRequest";
import {HttpResponse} from "../http/HttpResponse";
import {SessionError} from "../../security/exceptions/SessionError";
import {SessionContext} from "../../security/context/SessionContext";
import {ContainerContext} from "jec-commons";

/**
 * The <code>JsletContext</code> interface defines a set of methods that use a 
 * jslet to communicate with a domain container.
 */
export interface JsletContext extends ContainerContext{

  /**
   * Adds a jslet to this <code>JsletContext</code>.
   * 
   * @param {Jslet} jslet the jslet to add to this code>JsletContext</code>.
   */
  addJslet(jslet:Jslet):void;

  /**
   * Returns the <code>Jslet</code> instance that matches the specified URL.
   * 
   * @param {string} url the URL for which to find a jslet.
   * @return {Jslet} the jslet that matches the specified URL, or 
   *                 <code>undefined</code> whether the jslet does not exist.
   */
  getJslet(url:string):Jslet;

  /**
   * Returns the security context associated with this <code>JsletContext</code>
   * object.
   * 
   * @return {SecurityContext} the security context associated with this
   *                            <code>JsletContext</code> object.
   */
  getSecurityContext():SecurityContext;

  /**
   * Returns the session context associated with this <code>JsletContext</code>
   * object.
   * 
   * @return {SessionContext} the session context associated with this
   *                          <code>JsletContext</code> object.
   */
  getSessionContext():SessionContext;
  
  /**
   * Authenticates the specified crendentials.
   *
   * @param {HttpRequest} req the <code>HttpRequest</code> instance for the 
   *                          current HTTP transaction.
   * @param {HttpResponse} res the <code>HttpResponse</code> instance for the  
   *                           current HTTP transaction.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes an error 
   *                          object as parameter.
   */
  authenticate(req:HttpRequest, res:HttpResponse,
                                                result:(error?:any)=>void):void;
  
  /**
   * Invalidates the current session.
   *
   * @param {HttpRequest} req the <code>HttpRequest</code> instance for the 
   *                          current HTTP transaction.
   * @param {HttpResponse} res the <code>HttpResponse</code> instance for the  
   *                           current HTTP transaction.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes a  
   *                          <code>SessionError</code> object as parameter.
   */
  invalidateSession(req:HttpRequest, res:HttpResponse,
                                        result:(error?:SessionError)=>any):void;
}
