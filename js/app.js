$(document).ready(function() {

    var players = ['X', 'O'];
    var player = 0;

    $('.square').click(function() {

        var square = $(this);

        if (square.attr('value') === undefined) {

            $(this).text(players[player]);
            $(this).attr('value', players[player]);
            if(getWinner()){
              alert("Player " + players[player] + " has won!");
            }

            player = 1 - player;
        }

    });

function getWinner() {
    var board = [];
    var ret = false;
    console.log("inside getWinner")

    $('.square').each(function() {
        board.push($(this).attr('value'));
    });

    for (var i = 0; i < players.length; i++) {
        if (players[player] === board[0] && players[player] === board[1] && players[player] === board[2]) {
            ret = true;
            console.log("first win condition")
        } else if (players[player] === board[3] && players[player] === board[4] && players[player] === board[5]) {
            ret = true;
        } else if (players[player] === board[6] && players[player] === board[7] && players[player] === board[8]) {
            ret = true;
        } else if (players[player] === board[0] && players[player] === board[3] && players[player] === board[6]) {
            ret = true;
        } else if (players[player] === board[1] && players[player] === board[4] && players[player] === board[7]) {
            ret = true;
        } else if (players[player] === board[2] && players[player] === board[5] && players[player] === board[8]) {
            ret = true;
        } else if (players[player] === board[0] && players[player] === board[4] && players[player] === board[8]) {
            ret = true;
        } else if (players[player] === board[3] && players[player] === board[5] && players[player] === board[6]) {
            ret = true;
        }
    }

    return ret;

}


});



