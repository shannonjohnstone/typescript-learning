import fs from 'fs';

export abstract class DataParser<R> {
  abstract format(data: string): R;
  abstract filename: string;

  readUTF(): R {
    const result = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });

    return this.format(result);
  }
}
