$(document).ready(function() {

  var checkBoard = function(trio,side,boardState){
    return (boardState[trio[0]] === side) &&
    (boardState[trio[1]] === side) &&
    (boardState[trio[2]] === side);
  };

  var turn = 1;
  var state;
  var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
  var winnerFound = false;

  $('.cell').on('click', function() {
    var self = $(this);
    if (turn % 2 ==0) {
      self.text('x').addClass('player2');
      $('#player_name').text('Player 2');

    } else {
      self.text('o').addClass('player1');
      $('#player_name').text('Player 1');
    }
    self.off('click');
    state = $('.cell').get().map(function(elem) {
      return elem.innerText;
    });
    checkForWin();
    turn++;
  });

  function checkForWin() {
    for (var i=0;i<winningCombos.length;i++) {
      if (turn > 1) {
        if (checkBoard(winningCombos[i], 'x', state)) {
         return handleWinner("x");
       } else if (checkBoard(winningCombos[i], 'o', state)) {
         return handleWinner("o");
       } 
     } 
   }
   if ((turn == 9) && (winnerFound == false)) {
    return handleDraw();
   }
 }


 function handleWinner(player) {
  alert(player + ', you sunk my battle ship!');
  winnerFound = true;
  $('.cell').off('click');
  $('.cell').empty();
  window.location.reload();   
}

function handleDraw() {
  alert('Draw!');
  $('.cell').empty();
  window.location.reload();
};

$('button').bind('click', function() {
  window.location.reload();

});

});  
