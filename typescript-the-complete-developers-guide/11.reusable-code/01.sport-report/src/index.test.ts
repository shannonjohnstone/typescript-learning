import { CsvFileReader } from './file-reader/CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatcheReader } from './modules/matches/MatchReader';
import { Summary } from './analyzers/AnalyzerSummary';

describe('Sport Report', () => {
  test('should analyze wins', () => {
    const csvReader = new CsvFileReader('football.csv');
    const matchReader = new MatcheReader(csvReader);
    const wins = new WinsAnalysis('Man United');
    expect(wins.run(matchReader.load())).toEqual('Man United won 18 matches');
  });

  test('should analyze and report report', () => {
    const csvReader = new CsvFileReader('football.csv');
    const matchReader = new MatcheReader(csvReader);
    const wins = new WinsAnalysis('Man United');

    const mockPrint = jest.fn();
    const summary = new Summary(wins, { print: mockPrint });
    summary.run(matchReader.load());

    expect(wins.run(matchReader.load())).toEqual('Man United won 18 matches');
    expect(mockPrint).toHaveBeenCalled();
  });
});
