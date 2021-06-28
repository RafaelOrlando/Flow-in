"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
function getOneAuction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, orderBy, orderType, page } = req.query;
            const resultPage = 5;
            const offset = resultPage * (Number(page) - 1);
            const auctions = yield connection_1.default("auction")
                .where("title", "LIKE", `%${title}%`)
                .orderBy(orderBy || "title", orderType)
                .offset(offset);
            res.send(auctions);
        }
        catch (error) {
            res.status(500).send("Erro");
        }
    });
}
exports.default = getOneAuction;
//# sourceMappingURL=getOneAuction.js.map