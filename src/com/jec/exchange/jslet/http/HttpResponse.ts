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

import {CookieOptions} from "./CookieOptions";
import {SendFileOptions} from "./SendFileOptions";

/**
 * Represents a response to a HTTP request.
 */
export interface HttpResponse {
  
  ////////////////////////////////////////////////////////////////////////////
  // Public accessors
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a boolean value that indicates whether the server sent HTTP headers
   * for the response (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the server sent HTTP headers 
   *                   for the response, <code>false</code> otherwise.
   */
  getHeadersSent():boolean;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Sets the HTTP response <code>Content-Disposition</code> header field to 
   * <code>attachment</code>. If a <code>filename</code> is given, then it sets 
   * the <code>Content-Type</code> based on the extension name and sets the
   * <code>Content-Disposition</code> <code>filename</code> parameter.
   * 
   * @param {string} filename the name of the file to be attached.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  attachment(filename?:string):HttpResponse;
  
  /**
   * Sets the HTTP response <code>Content-Disposition</code> header field to 
   * <code>attachment</code>. If a <code>filename</code> is given, then it sets 
   * the <code>Content-Type</code> based on the extension name and sets the
   * <code>Content-Disposition</code> <code>filename</code> parameter.
   * 
   * @param {string} name the name of the cookie.
   * @param {string} value the value of the specified cookie.
   * @param {CookieOptions} options the options for the specified cookie.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  cookie(name:string, value:string, options?:CookieOptions):HttpResponse;

  /**
   * Clears the  specified cookie.
   * 
   * @param {string} name the name of the cookie to clear.
   * @param {CookieOptions} options the options for the specified cookie.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  clearCookie(name:string, options?:CookieOptions):HttpResponse;
  
  /**
   * Sends the file at the specified <code>path</code> to the HTTP response. 
   * 
   * @param {string} path the path where the file to send is located.
   * @param {string} filename an optional parameter to indicate the name of the
   *                          file to send.
   * @param {Function} complete a method called when the transfer is complete,
   *                            or when an error occured during the process.
   */
  download(path:string, filename?:string, complete?:(err?:Error) => any):void;
  
  /**
   * Ends the response process.
   * 
   * @param {string|any} data a chunk of the response body.
   * @param {string} encoding specifies how to encode the chunck into a byte
   *                          stream.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  end(data?:string|any, encoding?:string):HttpResponse;
  
  /**
   * Performs content-negotiation on the <code>Accept</code> HTTP header on the
   * request object, when present. The <code>obj</code> parameters defines the
   * mapped treatments that can be used in response to the <code>Accept</code>
   * header. The following sample code shows how to create different response
   * treatments depending on the MIME type of the current HTTP request:
   * 
   * [[include:HttpResponse-format.md]]
   * 
   * @param {any} obj an object that represents the different cases used to send
   *                  information through the current HTTP transaction.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  format(obj:any):HttpResponse;
  
  /**
   * Returns the HTTP response header specified by the <code>field</code>
   * parameter.
   * 
   * @param {string} field the reference to the HTTP response header to find.
   * @return {string} the the HTTP response header which matches the
   *                  <code>field</code> parameter. The match is
   *                  case-insensitive.
   */
  getHeader(field:string):string;
  
  /**
   * Joins the link properties, defined in the <code>links</code> parameter, to
   * populate the <code>Link</code> HTTP header field of the response.
   * Links are provided as list of a key/value properties, as shown below:
   * 
   * [[include:HttpResponse-links.md]]
   * 
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  links(links:any):HttpResponse;
  
  /**
   * Sets the <code>Location</code> HTTP header.
   * 
   * @param {string} path the new path for the <code>Location</code> header
   *                      field of the HTTP response.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  location(path:string):HttpResponse;
  
  /**
   * Redirects to the URL derived from the specified <code>path</code>.
   * 
   * @param {string} path the path used for the URL redirection.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  redirect(path:string):HttpResponse;

  /**
   * Sends the body of the HTTP response.
   * 
   * @param {any} body an object taht represents the body of the HTTP response.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  send(body:any):HttpResponse;

  /**
   * Transfers the file at the given path; This method sets the 
   * <code>Content-Type</code> response HTTP header field by using the
   * filename extension. Unless the <code>root</code> property of the
   * <code>option</code> parameter is set, <code>path</code> must be an absolute
   * path to the transfered file.
   * 
   * @param {string} path the path to the file to transfer.
   * @param {SendFileOptions} options a set of options that can be used to set 
   *                                  header properties related to the file to
   *                                  transfer.
   * @param {Function} complete a method called when the transfer is complete,
   *                            or when an error occured during the process.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  sendFile(path:string, options?:SendFileOptions,
                        complete?:(err?: Error) => any):HttpResponse;
  
  /**
   * Sets the response HTTP status code to the specified <code>statusCode</code>
   * parameter and send its string representation as the response body. The
   * method `res.sendStatus(XXX)` is similar to `res.status(XXX).send()`, where
   * `XXX` represents a valid status code.
   * 
   * @param {number} statusCode the status code to send. Valid values are the
   *                            constants of the <code>HttpStatusCode</code>
   *                            class.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  sendStatus(statusCode:number):HttpResponse;

   /**
   * Sets the response HTTP header field to the specified <code>value</code>
   * parameter.
   * 
   * @param {string} field the HTTP header field to set.
   * @param {string} value the value of the HTTP header field to set.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  setHeader(field:string, value:string):HttpResponse;

  /**
   * Sets the response HTTP status code to the specified <code>statusCode</code>
   * parameter.
   * 
   * @param {number} statusCode the status code to of the HTTP response. Valid 
   *                            values are the constants of the 
   *                            <code>HttpStatusCode</code> class.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  status(statusCode:number):HttpResponse;
  
  /**
   * Sets the <code>Content-Type</code> HTTP header value to the specified MIME
   * <code>type</code>.
   * 
   * @param {string} type the value of the HTTP MIME type.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  type(type:string):HttpResponse;
  
  /**
   * Sets the <code>Vary</code> HTTP header value to the <code>field</code>
   * parameter.
   * 
   * @param {string} field the value of the HTTP <code>Vary</code> header value.
   * @return {HttpResponse} the reference to this <code>HttpResponse</code>
   *                        instance.
   */
  vary(field:string):HttpResponse;
}