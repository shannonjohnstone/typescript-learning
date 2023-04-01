import fs from 'fs';
import { Matches } from './Matches';

describe('Matches', () => {
  describe('Given a team name', () => {
    test('Then provide their total wins', () => {
      const data = fs.readFileSync('football.csv', {
        encoding: 'utf-8',
      });

      const parsedMatchData = data.split('\n').map((item) => item.split(','));
      const matchReporter = new Matches(parsedMatchData);

      expect(matchReporter.totalWins('Man United')).toEqual(18);
    });
  });
});
