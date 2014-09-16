$(document).ready(function(){

  var checkBoard = function(x,y,z,side,boardState){
    return (boardState[x] === side) &&
    (boardState[y] === side) &&
    (boardState[z] === side);
  };

  var turn = 1;
  $('.cell').on('click', function(){
    var self = $(this);
    if (turn % 2 ==0){
      self.text('o').addClass('player1');
      document.getElementById('player_name').innerHTML="Player 2";
    } else {
      self.text('x').addClass('player2');
      document.getElementById('player_name').innerHTML="Player 1";
    }
    self.off('click');
    turn++;
    var state = $('.cell').get().map(function(elem){
      return elem.innerText;
    });

// forEach?
// 

// var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

  var maxPlays = 9;

  if (checkBoard(0, 1, 2, 'x', state) ||
    checkBoard(3, 4, 5, 'x', state) ||
    checkBoard(6, 7, 8, 'x', state) ||
    checkBoard(0, 4, 8, 'x', state) ||
    checkBoard(2, 4, 6, 'x', state) ||
    checkBoard(0, 3, 6, 'x', state) ||
    checkBoard(1, 4, 7, 'x', state) ||
    checkBoard(2, 5, 8, 'x', state)
    )
    { alert('x wins!!');
    $('.cell').off('click');

  } else if (checkBoard(0, 1, 2, 'o', state) ||
    checkBoard(3, 4, 5, 'o', state) ||
    checkBoard(6, 7, 8, 'o', state) ||
    checkBoard(0, 4, 8, 'o', state) ||
    checkBoard(2, 4, 6, 'o', state) ||
    checkBoard(0, 3, 6, 'o', state) ||
    checkBoard(1, 4, 7, 'o', state) ||
    checkBoard(2, 5, 8, 'o', state)
    )
  { alert('ooo ya!!');
    $('.cell').off('click');

  } 
  });

  function checkDraw() {
    if ($('table').children().text().length == 9) {
      setTimeout(function() { 
        alert('Everyone is a winner!!');
      });
    };
  }


  $('button').bind('click', function() {
    window.location.reload();
  });

});  
