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

import "mocha";
import * as chai from "chai";
import * as spies from "chai-spies";
import {JsletContext} from "../../../../../src/com/jec/exchange/jslet/context/JsletContext";
import {HttpRequest} from "../../../../../src/com/jec/exchange/jslet/http/HttpRequest";
import {HttpResponse} from "../../../../../src/com/jec/exchange/jslet/http/HttpResponse";
import {HttpMethod} from "jec-commons";

const expect = chai.expect;
chai.use(spies);

// Class to test:
import {HttpJslet} from "../../../../../src/com/jec/exchange/jslet/HttpJslet";

// Test:
describe("HttpJslet", ()=> {

  beforeEach(()=>{
    httpJslet = new TestHttpJsletClass();
  });

  afterEach(()=>{
    httpJslet = null;
  });

  describe("#getContext()", ()=> {
    it("should return en empty object", function() {
      let context:any = httpJslet.getContext();
      expect(context).to.not.be.null;
      expect(context).to.be.sealed;
      expect(context).to.be.frozen;
    });
  });
  
  describe("#getContext()", ()=> {
    it("should return the same value the passed to the setContext() method", function() {
      let context:JsletContext = ({} as JsletContext);
      httpJslet.setContext(context)
      expect(httpJslet.getContext()).to.equal(context);
    });
  });

  describe("#get()", ()=> {
    it("should return 'undefined' when 'key' is not defined", function() {
      expect(httpJslet.get(UNDEFINED_KEY)).to.equal(undefined);
    });
  });
  
  describe("#get()", ()=> {
    it("should return the right value when 'key' is defined", function() {
      httpJslet[DEFINED_KEY] = DEFINED_KEY_VALUE;
      expect(httpJslet.get(DEFINED_KEY)).to.equal(DEFINED_KEY_VALUE);
    });
  });
  
  describe("#getName()", ()=> {
    it("should return en empty object by default", function() {
      let name:any = httpJslet.getName();
      expect(name).to.not.be.null;
      expect(name).to.be.sealed;
      expect(name).to.be.frozen;
    });
  });
  
  describe("#getTemplate()", ()=> {
    it("should return 'null' by default", function() {
      expect(httpJslet.getTemplate()).to.be.null;
    });
  });
  
  describe("#getTemplate()", ()=> {
    it("should return the same value the passed to the getTemplate() method", function() {
      httpJslet.setTemplate(TEMPLATE_VALUE);
      expect(httpJslet.getTemplate()).to.equal(TEMPLATE_VALUE);
    });
  });

  describe("#getUrlPatterns()", ()=> {
    it("should return en empty object by default", function() {
      let patterns:any = httpJslet.getUrlPatterns();
      expect(patterns).to.not.be.null;
      expect(patterns).to.be.sealed;
      expect(patterns).to.be.frozen;
    });
  });

  describe("#service()", ()=> {
    it("should invoke the callback function with the same parameters as passed to the service() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.GET);
      let response:HttpResponse = buildResponse();
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{
        expect(req).to.equal(request);
        expect(res).to.equal(response);
        expect(data).to.not.be.null;
      });
    });
  });

  describe("#service()", ()=> {
    it("should invoke the doDelete() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.DELETE);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doDelete");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doGet() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.GET);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doGet");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doOptions() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.OPTIONS);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doOptions");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doTrace() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.TRACE);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doTrace");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doHead() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.HEAD);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doHead");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doConnect() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.CONNECT);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doConnect");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doPut() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.PUT);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doPut");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
  
  describe("#service()", ()=> {
    it("should invoke the doPost() method", function() {
      let request:HttpRequest = buildRequest(HttpMethod.POST);
      let response:HttpResponse = buildResponse();
      let spy:any = chai.spy.on(httpJslet, "doPost");
      httpJslet.service(request, response, (req:HttpRequest, res:HttpResponse, data:any)=>{});
      expect(spy).to.have.been.called;
    });
  });
});

// Utilities:
let httpJslet:HttpJslet = null;
class TestHttpJsletClass extends HttpJslet {}
const UNDEFINED_KEY:string = "undefinedKey";
const DEFINED_KEY:string = "definedKey";
const DEFINED_KEY_VALUE:string = "definedKeyValue";
const TEMPLATE_VALUE:string = "templateValue";
const buildRequest:Function = function(method:string):HttpRequest {
  let request:HttpRequest = (
    {
      getMethod():string { return method; }
    } as HttpRequest
  );
  return request;
};
const buildResponse:Function = function():HttpResponse {
  let response:HttpResponse = (
    {
      status(statusCode:number):HttpResponse { return this; }
    } as HttpResponse
  );
  return response;
};
