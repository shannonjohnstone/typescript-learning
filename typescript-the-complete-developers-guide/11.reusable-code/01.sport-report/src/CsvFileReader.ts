import fs from 'fs';
import { DataReader } from './MatchReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(public filename: string) { }

  read() {
    const data = fs.readFileSync(this.filename, {
      encoding: 'utf-8',
    });

    this.data = data.split('\n').map((row) => row.split(','));
  }
}
