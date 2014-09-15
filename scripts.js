$(document).ready(function(){

  // var player1 = {
  //   mark: 'x',
  //   name: 'Player 1',
  //   style: 'player1_cell',
  //   score_el: 'player1_wins',
  //   wins: 0
  // };

  // var player2 = {
  //   mark: 'o',
  //   name: 'Player 2',
  //   style: 'player2_cell',
  //   score_el: 'player2_wins',
  //   wins: 0
  // };

  // function initTurn(){
  //   $('#player_name').text(players[current_player].name);
  //   $('#player_mark').text(players[current_player].mark);
  // };


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

  var testRows = [
  [null, null, null],
  ['x', 'x', 'x'],
  ['x', 'o', 'x']
  ];

  function checkWinner(element, index, array){

  }


  var turn = 1;
  $('.cell').on('click', function(){
    var self = $(this);
    if (turn % 2 ==0){
      self.text('o').addClass('player1');
    } else {
      self.text('x').addClass('player2');
    }
    self.off('click');
    turn++;
    var boardState = $('.cell').get().map(function(elem){
      return elem.innerText;
    });
    if (((boardState)[0] === 'x') && ((boardState)[1] === 'x') && ((boardState)[2] === 'x') ||
    ((boardState)[3] === 'x') && ((boardState)[4] === 'x') && ((boardState)[5] === 'x') ||
    ((boardState)[6] === 'x') && ((boardState)[7] === 'x') && (boardState[8] === 'x') ||
    ((boardState)[0] === 'x') && ((boardState)[4] === 'x') && (boardState[8] === 'x') ||
    ((boardState)[2] === 'x') && ((boardState)[4] === 'x') && (boardState[6] === 'x') ||
    ((boardState)[0] === 'x') && ((boardState)[3] === 'x') && (boardState[6] === 'x') ||
    ((boardState)[1] === 'x') && ((boardState)[4] === 'x') && (boardState[7] === 'x') ||
    ((boardState)[2] === 'x') && ((boardState)[5] === 'x') && (boardState[8] === 'x')) {
      console.log('x marks the spot!');
    } else if ((((boardState)[0] === 'o') && ((boardState)[1] === 'o') && ((boardState)[2] === 'o') ||
    ((boardState)[3] === 'o') && ((boardState)[4] === 'o') && ((boardState)[5] === 'o') ||
    ((boardState)[6] === 'o') && ((boardState)[7] === 'o') && (boardState[8] === 'o') ||
    ((boardState)[0] === 'o') && ((boardState)[4] === 'o') && (boardState[8] === 'o') ||
    ((boardState)[2] === 'o') && ((boardState)[4] === 'o') && (boardState[6] === 'o') ||
    ((boardState)[0] === 'o') && ((boardState)[3] === 'o') && (boardState[6] === 'o') ||
    ((boardState)[1] === 'o') && ((boardState)[4] === 'o') && (boardState[7] === 'o') ||
    ((boardState)[2] === 'o') && ((boardState)[5] === 'o') && (boardState[8] === 'o')) ) {
      console.log('o no she didn\'t!');
    } else {
      console.log('draw!')
    }
  });


});




// way of telling winner who one
// array of 3 arrays
// different win scenarios and check them against grid and if any of them occur
// play wins if they get same symbol 3 times in a row
// itterate through 2D 
// 4 sets of for loops
// check for rows then columns then diagonal