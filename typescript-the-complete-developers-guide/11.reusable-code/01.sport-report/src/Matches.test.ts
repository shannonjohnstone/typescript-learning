import { CsvFileReader } from './CsvFileReader';
import { Matches } from './Matches';
import { MatcheReader } from './MatchReader';

describe('Matches', () => {
  describe('Given a team name', () => {
    test('Then provide their total wins', () => {
      const csvFileReader = new CsvFileReader('football.csv');
      const matchReader = new MatcheReader(csvFileReader);

      const matchReporter = new Matches(matchReader.load());

      expect(matchReporter.wins('Man United')).toEqual(18);
    });
  });
});
