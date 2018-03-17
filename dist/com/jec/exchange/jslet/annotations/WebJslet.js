"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsletConnectorRefs_1 = require("../jcad/JsletConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function WebJslet(params) {
    return function (target) {
        const ctx = CTXM.getContext(JsletConnectorRefs_1.JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF);
        return DCM.getDecorator(JsletConnectorRefs_1.JsletConnectorRefs.WEB_JSLET_CONNECTOR_REF, ctx)
            .decorate(target, params);
    };
}
exports.WebJslet = WebJslet;
