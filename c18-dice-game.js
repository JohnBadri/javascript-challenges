function Game(dice1, dice2) {
  this.dice1 = dice1;
  this.dice2 = dice2;
  this.sum = dice1 + dice2;
  this.result =
    this.sum === 7 || this.sum === 11
      ? 'win'
      : this.sum === 2 || this.sum === 3 || this.sum === 12
      ? 'lose'
      : 'roll again';
}

function diceGame(num) {
  let results = [];

  for (let i = 0; i < num; i++) {
    const game = new Game(
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6)
    );

    results.push(game);
  }

  return results;
}

console.log(diceGame(10));
