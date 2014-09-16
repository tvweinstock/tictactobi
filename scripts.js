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
    console.log("Turn: " + turn);
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
    console.log(state);
    checkForWin();
    turn++;    
  });

  // Using regular for loop
  function checkForWin() {
    for (var i=0;i<winningCombos.length;i++) {
      if (turn > 1) {
        if (checkBoard(winningCombos[i], 'x', state)) {
          handleWinner("x");
        } else if (checkBoard(winningCombos[i], 'o', state)) {
          handleWinner("x");
        } else if (turn == 9) {
          alert("Draw!");
          break;
        }
      }
    }
  }
  
  // Using foreach
  // can't short circuit this!!
  // function checkForWinForEach() {
  //   if (turn > 1) {
  //     winningCombos.forEach(function(trio) {
  //       if (checkBoard(trio, 'x', state)) {
  //         handleWinner("x");
  //       } else if (checkBoard(trio, 'o', state)) {
  //         handleWinner("x");
  //       } else if (turn == 9) {
  //         alert("Draw!");
  //         break;
  //       }
  //     });  
  //   }
  // }
  
  function handleWinner(player) {
    alert(player + ' wins!!');
    $('.cell').off('click');    
  }

  function handleDraw() {
    alert("Draw!!");
    return false;
    // implement clearing cells here
    // restart game
  }

  // if (checkBoard(0, 1, 2, 'x', state) ||
  //   checkBoard(3, 4, 5, 'x', state) ||
  //   checkBoard(6, 7, 8, 'x', state) ||
  //   checkBoard(0, 4, 8, 'x', state) ||
  //   checkBoard(2, 4, 6, 'x', state) ||
  //   checkBoard(0, 3, 6, 'x', state) ||
  //   checkBoard(1, 4, 7, 'x', state) ||
  //   checkBoard(2, 5, 8, 'x', state)
  //   )
  //   { alert('x wins!!');
  //   $('.cell').off('click');

  // } else if (checkBoard(0, 1, 2, 'o', state) ||
  //   checkBoard(3, 4, 5, 'o', state) ||
  //   checkBoard(6, 7, 8, 'o', state) ||
  //   checkBoard(0, 4, 8, 'o', state) ||
  //   checkBoard(2, 4, 6, 'o', state) ||
  //   checkBoard(0, 3, 6, 'o', state) ||
  //   checkBoard(1, 4, 7, 'o', state) ||
  //   checkBoard(2, 5, 8, 'o', state)
  //   )
  // { alert('ooo ya!!');
  //   $('.cell').off('click');
  // } else if (turn == 9) {
  //     alert('Everyone wins!');
  //   }
  
  // });



  $('button').bind('click', function() {
    window.location.reload();
  });

});  
