import { MatchesData } from '../modules/matches/MatchData';
import { HtmlReporter } from '../reporters/HtmlReporter';
import { WinsAnalysis } from './WinsAnalysis';

export interface Analyzer {
  run(matches: MatchesData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public anaylzer: Analyzer, public outputTarget: OutputTarget) { }

  static winsReportedInHtml(name: string) {
    return new Summary(new WinsAnalysis(name), new HtmlReporter());
  }

  run(data: MatchesData[]): void {
    const result = this.anaylzer.run(data);
    this.outputTarget.print(result);
  }
}
