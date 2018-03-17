"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootstrapConnectorRefs_1 = require("../jcad/BootstrapConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Bootstrap(params) {
    return function (target) {
        const ctx = CTXM.getContext(BootstrapConnectorRefs_1.BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF);
        return DCM.getDecorator(BootstrapConnectorRefs_1.BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF, ctx)
            .decorate(target, params);
    };
}
exports.Bootstrap = Bootstrap;
