$(document).ready(function() {

  var checkBoard = function(trio,side,boardState){
    return (boardState[trio[0]] === side) &&
    (boardState[trio[1]] === side) &&
    (boardState[trio[2]] === side);
  };

  var turn = 1;
  var state;
  var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
  var winner;

  $('.cell').on('click', function() {
    var self = $(this);
    if (turn % 2 ==0) {
      self.text('o').addClass('player1');
      document.getElementById('player_name').innerHTML="Player 2";
    } else {
      self.text('x').addClass('player2');
      document.getElementById('player_name').innerHTML="Player 1";
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
          handleWinner("x");
        } else if (checkBoard(winningCombos[i], 'o', state)) {
          handleWinner("x");
        } else if (turn == 9) {
          handleDraw();
          break;
        }
      }
    }
  }
  
  function handleWinner(player) {
    alert(player + ' wins!!');
    $('.cell').off('click');    
  }

  function handleDraw() {
    alert("Draw!!");
    $('.cell').empty();
    window.location.reload();
  };

  $('button').bind('click', function() {
    window.location.reload();
  });

});  
