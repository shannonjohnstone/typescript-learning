import { Matches } from './Matches';

describe('Matches', () => {
  describe('Given a team name', () => {
    test('Then provide their total wins', () => {
      const matchReporter = new Matches();
      expect(matchReporter.totalWins()).toEqual(0);
    });
  });
});
