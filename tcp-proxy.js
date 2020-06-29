"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
net_1.default.createServer(inc => {
    const out = net_1.default.connect(25);
    inc.pipe(out);
    out.pipe(inc);
}).listen(25025);
console.log("Net server proxying 25025 => 25");
