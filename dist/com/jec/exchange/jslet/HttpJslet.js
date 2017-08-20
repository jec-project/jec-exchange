"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
class HttpJslet {
    constructor() {
        this.__context = HttpJslet.EMPTY_DATA;
        this.__template = null;
    }
    static buildEmptyDataObj() {
        let obj = {};
        Object.freeze(obj);
        Object.seal(obj);
        return obj;
    }
    init() { }
    destroy() { }
    before() { }
    after() { }
    getContext() {
        return this.__context;
    }
    get(key) {
        return this[key];
    }
    getName() {
        return HttpJslet.EMPTY_DATA;
    }
    getTemplate() {
        return this.__template;
    }
    setTemplate(template) {
        this.__template = template;
    }
    getUrlPatterns() {
        return HttpJslet.EMPTY_DATA;
    }
    setContext(context) {
        this.__context = context;
    }
    service(req, res, exit) {
        let method = req.getMethod();
        if (method === jec_commons_1.HttpMethod.GET)
            this.doGet(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.POST)
            this.doPost(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.PUT)
            this.doPut(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.DELETE)
            this.doDelete(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.HEAD)
            this.doHead(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.OPTIONS)
            this.doOptions(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.TRACE)
            this.doTrace(req, res, exit);
        else if (method === jec_commons_1.HttpMethod.CONNECT)
            this.doConnect(req, res, exit);
        else {
        }
    }
    doDelete(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doGet(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doOptions(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doTrace(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doHead(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doConnect(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doPut(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
    doPost(req, res, exit) {
        exit(req, res.status(jec_commons_1.HttpStatusCode.NOT_FOUND), HttpJslet.EMPTY_DATA);
    }
}
HttpJslet.EMPTY_DATA = HttpJslet.buildEmptyDataObj();
exports.HttpJslet = HttpJslet;
