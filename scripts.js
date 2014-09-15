$(document).ready(function(){

  var player1 = {
    mark: 'X',
    name: 'Player 1',
    style: 'player1_cell',
    score_el: 'player1_wins',
    wins: 0
  };

  var player2 = {
    mark: 'O',
    name: 'Player 2',
    style: 'player2_cell',
    score_el: 'player2_wins',
    wins: 0
  };

  function initTurn(){
    $('#player_name').text(players[current_player].name);
    $('#player_mark').text(players[current_player].mark);
  };


  var winningCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
    [1,5,9]
  ];


  var turn = 1;
  $('.cell').on('click', function(){
    var self = $(this);
    if (turn % 2 ==0){
      self.text('O').addClass('player1');
    } else {
      self.text('X').addClass('player2');
    }
    self.off('click');
    turn++;
  });

});




// way of telling winner who one
// array of 3 arrays
// different win scenarios and check them against grid and if any of them occur
// play wins if they get same symbol 3 times in a row
// itterate through 2D 
// 4 sets of for loops
// check for rows then columns then diagonal