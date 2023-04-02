import { DataParser } from './DataParser.abstract';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

type MatchesData = [Date, string, string, number, number, MatchResult, string][];

const dateStringToDate = (dateString: string) => {
  const dateParts = dateString.split('/').map((value) => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export class MatchesReader extends DataParser<MatchesData> {
  constructor(public filename: string) {
    super();
  }

  format(data: string): MatchesData {
    return data
      .split('\n')
      .map((item) => item.split(','))
      .map((row: string[]) => {
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
  }
}
