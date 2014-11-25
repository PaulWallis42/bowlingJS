function Game(){
  for (var i = 0, a = new Array(21); i < 21;){
    a[i++] = 0;
  }
  this.rolls = a;
  this.currentRoll = 0;
}

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function(){
  var score = 0;
  var i = 0;
  for(var frame = 0; frame < 10; frame++){
    if(this.rolls[i] + this.rolls[i+1] === 10){
      score += 10 + this.rolls[i+2];
      i += 2
    } else {
      score += this.rolls[i] + this.rolls[i+1];
      i += 2;
    }
  }
  return score;
};
