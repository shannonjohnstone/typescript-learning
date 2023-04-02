import { DataReader } from '../../file-reader/DataReader';
import { MatchResult, MatchesData } from './MatchData';

const dateStringToDate = (dateString: string) => {
  const dateParts = dateString.split('/').map((value) => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export class MatcheReader {
  public matches: MatchesData[] = [];
  constructor(public reader: DataReader) { }

  load(): MatchesData[] {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchesData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });

    return this.matches;
  }
}
