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

  $('.table .col')
  .bind('click', playMove)
  .bind('mouseover', hoverCell)
  .bind('mouseout', leaveCell);

  function hoverCell(ev) {
    $(this).addClass('hover');
    return false;
  };

  function leaveCell(ev) {
    $(this).removeClass('hover');
    return false;
  };

  function playMove(ev) {
    var cell = $(this);
    cell
    .addClass(players[current_player].style)
    .addClass('marked')
    .text(players[current_player].mark)
    .trigger('mouseout')
    .unbind('click mouseover mouseout');

    if(!checkAndProcessWin()) {
      current_player = (++current_player) % players.length;
      initTurn(current_player);
    }
    return false;
  };

  $.expr[':'].mod = function(el, i, m) {
    return i % m[3] === 0
  };
  $.expr[':'].sub_mod = function(el, i, m) {
    var params = m[3].split(',');
    return (i-params[0]) % params[1] === 0
  };

  // check rows
  for (var row=1; row <= num_of_rows && !win; ++row ) 
  {
    cells_inspected = cells
    .filter(":lt("+num_of_cols*row+")")
    .filter(":eq("+(num_of_cols*(row-1))+"),:gt("+(num_of_cols*(row-1))+")")
    .filter("."+current_class);
    if ( cells_inspected.length == num_of_cols ) win = true;
  }

  // check columns
  for (var col=0; col <= num_of_cols && !win; ++col )
  {
    cells_inspected = cells
    .filter(":sub_mod("+col+","+num_of_rows+")")
    .filter("."+current_class);
    if ( cells_inspected.length == num_of_rows ) win = true;
  }
  // check diagonals
  cells_inspected = cells
  .filter(":mod("+(num_of_rows+1)+")")
  .filter("."+current_class);
  if ( cells_inspected.length == num_of_rows ) win = true;
  else{
    // From lower right to upper left
    cells_inspected = cells
    .filter(":mod("+(num_of_rows-1)+"):not(:last,:first)")
    .filter("."+current_class);
    if ( cells_inspected.length == num_of_rows ) win = true;
  }

//   var winningCombo = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [3,5,7],
//     [1,5,9]
//   ];


//   var turn = 1;
//   $('.col').on('click', function(){
//     var self = $(this);
//     if (turn % 2 ==0){
//       self.text('O').addClass('player1');
//     } else {
//       self.text('X').addClass('player2');
//     }
//     self.off('click');
//     turn++;
//   });

});




// way of telling winner who one
// array of 3 arrays
// different win scenarios and check them against grid and if any of them occur
// play wins if they get same symbol 3 times in a row
// itterate through 2D 
// 4 sets of for loops
// check for rows then columns then diagonal