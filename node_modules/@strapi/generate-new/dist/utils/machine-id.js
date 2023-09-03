"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_machine_id_1 = require("node-machine-id");
const crypto_1 = require("crypto");
exports.default = () => {
    try {
        const deviceId = (0, node_machine_id_1.machineIdSync)();
        return deviceId;
    }
    catch (error) {
        const deviceId = (0, crypto_1.randomUUID)();
        return deviceId;
    }
};
//# sourceMappingURL=machine-id.js.map