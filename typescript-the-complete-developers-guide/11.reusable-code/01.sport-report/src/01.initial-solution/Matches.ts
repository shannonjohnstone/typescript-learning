import { MatchResult, MatchesData } from '../modules/matches/MatchData';

export class Matches {
  constructor(public data: MatchesData[]) { }

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
