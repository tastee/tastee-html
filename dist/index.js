"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
class ExtractTasteeCode {
    static extract(filePath) {
        let instructions = new Array();
        if (path.extname(filePath.toString()) !== ".html") {
            throw new TasteeError("It's not a tastee file.");
        }
        let data = fs.readFileSync(filePath.toString());
        let html = cheerio.load(data.toString());
        html('pre.tastee').each((idx, element) => {
            let data = html(element).text();
            if (data) {
                data.toString().split("\n").forEach(element => instructions.push(element.trim()));
            }
        });
        return instructions;
    }
}
exports.ExtractTasteeCode = ExtractTasteeCode;
class TasteeError extends Error {
    constructor(m) {
        super(m);
    }
    sayHello() {
        return "Tastee Html : " + this.message;
    }
}
exports.TasteeError = TasteeError;
