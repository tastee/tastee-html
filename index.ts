import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

export class ExtractTasteeCode {

    static extract(filePath: String): Array<String> {
        let instructions = new Array<String>();
        if (path.extname(filePath.toString()) !== ".html") {
            throw new TasteeError("It's not a tastee file.");
        }
        let data = fs.readFileSync(filePath.toString());
        let html = cheerio.load(data.toString());
        html('pre.tastee').each((idx, element) => {
            let data = html(element).text()
            if (data) {
                data.toString().split("\n").forEach(element => instructions.push(element.trim()));
            }
        });
        return instructions;
    }
}

export class TasteeError extends Error {
    constructor(m: string) {
        super(m);
    }
    sayHello() {
        return "Tastee Html : " + this.message;
    }
}
