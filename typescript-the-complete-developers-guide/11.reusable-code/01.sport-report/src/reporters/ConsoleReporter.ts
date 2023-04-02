import { OutputTarget } from '../analyzers/AnalyzerSummary';

export class ConsoleReporter implements OutputTarget {
  print(report: string): void {
    console.log('\x1b[41m', report);
  }
}
