$(document).ready(function(){
  var turn = 1;
  $('.col').on('click', function(){
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