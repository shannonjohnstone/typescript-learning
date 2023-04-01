import fs from 'fs';
import { Matches } from './Matches';
import { DataParser } from './Data-parser';

describe('Matches', () => {
  describe('Given a team name', () => {
    test('Then provide their total wins', () => {
      const matchesParser = new DataParser('football.csv', Matches.parseCSV);

      const matchReporter = new Matches(matchesParser.parseUTF());

      expect(matchReporter.wins('Man United')).toEqual(18);
    });
  });
});
