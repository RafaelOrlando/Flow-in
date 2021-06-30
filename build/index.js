"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const getAllAuction_1 = __importDefault(require("./endpoints/getAllAuction"));
const postAuction_1 = __importDefault(require("./endpoints/postAuction"));
const deleteAllAuction_1 = __importDefault(require("./endpoints/deleteAllAuction"));
const getOneAuction_1 = __importDefault(require("./endpoints/getOneAuction"));
const postBid_1 = __importDefault(require("./endpoints/postBid"));
const getBid_1 = __importDefault(require("./endpoints/getBid"));
const deleteBid_1 = __importDefault(require("./endpoints/deleteBid"));
const idGenerator_1 = require("./services/idGenerator");
console.log(idGenerator_1.generateId());
app_1.default.get("/auction", getAllAuction_1.default);
app_1.default.delete("/auction/:id", deleteAllAuction_1.default);
app_1.default.get("/auction/one/", getOneAuction_1.default);
app_1.default.post("/auction/post", postAuction_1.default);
app_1.default.get("/bid/", getBid_1.default);
app_1.default.delete("/bid/:id", deleteBid_1.default);
app_1.default.post("/bid/post", postBid_1.default);
//# sourceMappingURL=index.js.map