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

import {HttpRequest} from "../../jslet/http/HttpRequest";
import {HttpResponse} from "../../jslet/http/HttpResponse";
import {SessionError} from "../exceptions/SessionError";
import {SessionOwner} from "../session/SessionOwner";
import {Session} from "../session/Session";
import {SessionId} from "../session/SessionId";

/**
 * Provides the API for sessions contexts whithin a JEC application.
 */
export interface SessionContext {

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the context root of the domain container associated with this
   * <code>SessionContext</code>.
   *
   * @returns {string} the context root of the domain container associated 
   *                   with this <code>SessionContext</code>.
   */
  getContextRoot():string;
  
  /**
   * Returns the default URL where to redirect the HTTP transaction in case of
   * session error.
   *
   * @returns {string} the default URL where to redirect the HTTP transaction in
   *                   case of session error.
   */
  getErrorUrl():string;

  /**
   * Invalidates the current session.
   *
   * @param {HttpRequest} req the <code>HttpRequest</code> instance for the 
   *                          current HTTP transaction.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()<code> methods takes a 
   *                          <code>SessionError</code> object as parameter.
   */
  invalidateSession(req:HttpRequest, result:(error?:SessionError)=>any):void;

  /**
   * Creates and returns a new session ID.
   *
   * @return {SessionId} a <code>SessionId</code> object that represents a new
   *                     session ID.
   */
  initSessionId():SessionId;

  /**
   * Initializes a session for the specified session owner.
   *
   * @param {HttpRequest} req the <code>HttpRequest</code> instance for the 
   *                          current HTTP transaction.
   * @param {SessionOwner} sessionOwner the session owner.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes a 
   *                          <code>SessionError</code>   object as parameter.
   */
  initSession(req:HttpRequest, sessionOwner:SessionOwner,
                               result:(error?:SessionError)=>any):void;

  /**
   * Loads a session specified by its identifier from the session storage.
   * 
   * @param {SessionId} sessionId the ID of the session to load.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes a 
   *                          <code>SessionError</code> object as parameter.
   */
  loadSession(sessionId:SessionId, result:(error?:SessionError)=>any):void;

  /**
   * Removes the session specified by its identifier from the session context.
   * 
   * @param {SessionId} sessionId the ID of the session to remove.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes a
   *                          <code>SessionError</code> object as parameter.
   */
  unloadSession(sessionId:SessionId, result:(error?:SessionError)=>any):void;

  /**
   * Updates data for the session specified by its identifier.
   * 
   * @param {SessionId} sessionId the ID of the session to update.
   * @param {Object} data the data associated with the session to update.
   * @param {Function} result the callback method used to handle the result of
   *                          the operation. When the operation has failed,
   *                          the <code>result()</code> methods takes a
   *                          <code>SessionError</code> object as parameter.
   */
  refreshSession(sessionId:SessionId, data:any,
                                      result:(error?:SessionError)=>any):void;

  /**
   * Returns a boolean that indicates whether the session specified by
   * <code>sessionId</code> exists for this context (<code>true</code>), or not
   * (<code>false</code>).
   * 
   * @param {SessionId} sessionId the ID of the session to check.
   * @return {Booleab} <code>true</code> whether the session specified by
   *                   <code>sessionId</code> exists, <code>false</code>
   *                   otherwise.
   */
  hasSession(sessionId:SessionId):boolean;

  /**
   * Returns the session specified by its identifier.
   * 
   * @param {SessionId} sessionId the ID of the session to get.
   * @return {Session} the session corresponding to the specified identifier.
   */
  getSession(sessionId:SessionId):Session;
}
