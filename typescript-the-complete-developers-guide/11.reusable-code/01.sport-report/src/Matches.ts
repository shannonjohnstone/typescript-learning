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

export class Matches {
  constructor(public data: MatchesData) { }

  static parseCSV(data: string): MatchesData {
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

  wins(team: string): number {
    const matchesWon = this.data.filter((match) => {
      const homeTeam = match[1];
      const awayTeam = match[2];
      const matchOutcome = match[5];

      return (
        (homeTeam === team && matchOutcome === MatchResult.HomeWin) ||
        (awayTeam === team && matchOutcome === MatchResult.AwayWin)
      );
    });

    return matchesWon.length;
  }
}
