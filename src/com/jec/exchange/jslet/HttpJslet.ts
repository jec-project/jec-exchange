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

import {Jslet} from "./Jslet";
import {JsletContext} from "./context/JsletContext";
import {HttpRequest} from "./http/HttpRequest";
import {HttpResponse} from "./http/HttpResponse";
import {HttpStatusCode, HttpMethod} from "jec-commons";

/**
 * An abstract class to be subclassed to create an HTTP jslet suitable for a JEC
 * application.
 */
export class HttpJslet implements Jslet {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>HttpJslet</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Builds an returns the object used by <code>HttpJslet</code> instances for
   * manipulating empty data.
   * 
   * @return {any} the object used for manipulating empty data.
   */
  private static buildEmptyDataObj():any {
    let obj:any = {};
    Object.freeze(obj);
    Object.seal(obj);
    return obj;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A convenient object used as internal empty data template.
   */
  private static readonly EMPTY_DATA:any = HttpJslet.buildEmptyDataObj();

  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The reference to the <code>JsletContext</code> associated with this
   * <code>HttpJslet</code> instance.
   */
  protected __context:JsletContext = HttpJslet.EMPTY_DATA;

  /**
   * The template page associated with this <code>HttpJslet</code> instance.
   */
  protected __template:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public init():void {}

  /**
   * @inheritDoc
   */
  public destroy():void {}
  
  /**
   * @inheritDoc
   */
  public before():void {}

  /**
   * @inheritDoc
   */
  public after():void {}

  /**
   * @inheritDoc
   */
  public getContext():JsletContext {
    return this.__context;
  }

  /**
   * Returns the dynamic property with the specified <code>key</code> name for 
   * this <code>HttpJslet</code> instance.
   *
   * @param {string} key the name of the property to return.
   * @return {Object} the property with the specified <code>key</code> name.
   */
  public get(key:string):any {
     return this[key];
  }

  /**
   * Returns the name of this <code>HttpJslet</code> instance.
   *
   * @method getName
   * @return {string} the name of this <code>HttpJslet</code> instance.
   */
  public getName():string {
     return HttpJslet.EMPTY_DATA;
  }
  
  /**
   * Returns the reference to the template page associated with this
   * <code>HttpJslet</code> instance.
   *
   * @return {string} the reference to the template page associated with this
   *                  <code>HttpJslet</code> instance.
   */
  public getTemplate():string {
     return this.__template;
  }
  
  /**
   * Sets the template page associated with this <code>HttpJslet</code> instance.
   *
   * @param {string} template the new template page associated with this
   *                          <code>HttpJslet</code> instance.
   */
  public setTemplate(template:string):void {
     this.__template = template;
  }
  
  /**
   * Returns the list of URL patterns associated with this
   * <code>HttpJslet</code> instance.
   *
   * @return {Array<String>} the list of URL patterns associated with this
   *                         <code>HttpJslet</code> instance.
   */
  public getUrlPatterns():string[] {
     return HttpJslet.EMPTY_DATA;
  }

  /**
   * @private
   */
  public setContext(context:JsletContext):void {
    this.__context = context;
  }

  /**
   * @inheritDoc
   */
  public service(req:HttpRequest, res:HttpResponse, 
              exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    let method:string = req.getMethod();
    if(method === HttpMethod.GET) this.doGet(req, res, exit);
    else if(method === HttpMethod.POST) this.doPost(req, res, exit);
    else if(method === HttpMethod.PUT) this.doPut(req, res, exit);
    else if(method === HttpMethod.DELETE) this.doDelete(req, res, exit);
    else if(method === HttpMethod.HEAD) this.doHead(req, res, exit);
    else if(method === HttpMethod.OPTIONS) this.doOptions(req, res, exit);
    else if(method === HttpMethod.TRACE) this.doTrace(req, res, exit);
    else if(method === HttpMethod.CONNECT) this.doConnect(req, res, exit);
    else {
      //TODO: trace error
    }
  }

  /**
   * Performs the HTTP DELETE operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doDelete(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }

  /**
   * Performs the HTTP GET operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doGet(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }

  /**
   * Performs the HTTP OPTIONS operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doOptions(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }

  /**
   * Performs the HTTP TRACE operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doTrace(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }

  /**
   * Performs the HTTP HEAD operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doHead(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }
  
  /**
   * Performs the HTTP CONNECT operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doConnect(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }

  /**
   * Performs the HTTP PUT operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doPut(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }
  
  /**
   * Performs the HTTP POST operation.
   *
   * @param {HttpRequest} req the HTTP request for the current HTTP transaction.
   * @param {HttpResponse} res the HTTP response for the current HTTP
   *                               transaction.
   * @param {Function} exit the function used by the container to handle
   *                        asynchronous answers for this jslet.
   */
  public doPost(req:HttpRequest, res:HttpResponse, 
             exit:(req:HttpRequest, res:HttpResponse, data:any) => void):void {
    exit(req, res.status(HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
  }
}
