import fs from 'fs';

export class DataParser<R> {
  constructor(public filename: string, public dto: (data: string) => R) { }

  parseUTF() {
    const result = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });

    return this.dto(result);
  }
}
