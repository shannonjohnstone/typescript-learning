export class Matches {
  constructor(public data: string[][]) { }

  totalWins(team: string): number {
    const matchesWon = this.data.filter((match) => {
      return (match[1] === team && match[5] === 'H') || (match[2] === team && match[5] === 'A');
    });

    return matchesWon.length;
  }
}
