// Source: the module containing the import() expression
// Target: the module referenced by the request in the import() expression


// non-ESM: a CommonJs or AMD module not setting __esModule: true
// transpiled-ESM: a CommonJS module setting __esModule: true because it was transpiled from ESM
// ESM: a normal EcmaScript module
// strict-ESM: a more strict EcmaScript module i. e. from a .mjs file
// JSON: a json file


// (A) source.js
// non-ESM, transpiled-ESM or ESM
import("./target").then(result => console.log(result));
// (B) source.mjs
// strict-ESM (mjs)
import("./target").then(result => console.log(result));
// (1) target.js
// non-ESM
exports.name = "name";
exports.default = "default";
// (2) target.js
// transpiled-ESM (__esModule)
exports.__esModule = true;
exports.name = "name";
exports.default = "default";
// (3) target.js or target.mjs
// ESM or strict-ESM (mjs)
export const name = "name";
export default "default";
// (4) target.json
// JSON
// { name: "name", default: "default" }