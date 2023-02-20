"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: 'lireddit',
        user: '',
        password: '',
        type: 'postgresql',
        debug: !constants_1.__prod__,
    });
};
console.log("hellooooo world");
//# sourceMappingURL=index.js.map