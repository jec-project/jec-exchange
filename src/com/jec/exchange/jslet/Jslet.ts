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

import {JsletContext} from "./context/JsletContext";
import {HttpRequest} from "./http/HttpRequest";
import {HttpResponse} from "./http/HttpResponse";

/**
 * This interface is for developing jslet. It receives and responds to requests
 * from clients.
 */
export interface Jslet {

  /**
   * Initializes the jslet and logs the process.
   */
  init():void;

  /**
   * Destroys the jslet, cleaning up whatever resources are being held, and
   * logs the destruction in the server log file.
   */
  destroy():void;

  /**
   * Called by the jslet container before the <code>service()</code> method.
   */
  before():void;

  /**
   * Called by the jslet container immediately after the <code>service()</code>
   * method.
   */
  after():void;

  /**
   * Returns the reference to the <code>JsletContext</code> associated with this
   * <code>Jslet</code>.
   *
   * @return {JsletContext} the reference to the <code>JsletContext</code>
   *                        associated with this <code>Jslet</code>.
   */
  getContext():JsletContext;

  /**
   * Called by the domain container to allow the jslet to respond to a request.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for this operation.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jeslet.
   */
  service(req:HttpRequest, res:HttpResponse, 
               exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void;
}
