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

import {HttpRequest} from "../../../src/com/jec/exchange/jslet/http/HttpRequest";
import {HttpResponse} from "../../../src/com/jec/exchange/jslet/http/HttpResponse";
import {HttpJslet} from "../../../src/com/jec/exchange/jslet/HttpJslet";

/*!
 * This module constains utilities used by the HttpJsletTest test suite.
 */

// Utilities:
export class TestHttpJsletClass extends HttpJslet {}
export const UNDEFINED_KEY:string = "undefinedKey";
export const DEFINED_KEY:string = "definedKey";
export const DEFINED_KEY_VALUE:string = "definedKeyValue";
export const TEMPLATE_VALUE:string = "templateValue";
export const buildRequest:Function = function(method:string):HttpRequest {
  let request:HttpRequest = (
    {
      getMethod():string { return method; }
    } as HttpRequest
  );
  return request;
};
export const buildResponse:Function = function():HttpResponse {
  let response:HttpResponse = (
    {
      status(statusCode:number):HttpResponse { return this; }
    } as HttpResponse
  );
  return response;
};
