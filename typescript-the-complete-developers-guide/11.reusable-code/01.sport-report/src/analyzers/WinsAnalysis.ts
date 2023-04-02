import { MatchesData, MatchResult } from '../modules/matches/MatchData';
import { Analyzer } from './AnalyzerSummary';
// import { MatchResult, MatchesData } from './MatchData';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchesData[]): string {
    const matchesWon = matches.filter((match) => {
      const homeTeam = match[1];
      const awayTeam = match[2];
      const matchOutcome = match[5];

      return (
        (homeTeam === this.team && matchOutcome === MatchResult.HomeWin) ||
        (awayTeam === this.team && matchOutcome === MatchResult.AwayWin)
      );
    });

    return `${this.team} won ${matchesWon.length} matches`;
  }
}
