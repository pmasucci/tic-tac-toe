$(document).ready(function() {

    var players = ['X', 'O'];
    var player = 0;
    var gameState = {};

    $('.square').click(function() {

        var square = $(this);

        if (square.attr('value') === undefined && !gameState.gameOver) {

            $(this).text(players[player]);
            $(this).attr('value', players[player]);
            gameState = getWinner();
            if (gameState.gameOver && gameState.winner) {
                alert("Player " + gameState.winner + " has won!");
            } else if (gameState.gameOver) {
                alert("The game has ended in a tie!");
            }

            player = 1 - player;
        }

    });

    function getWinner() {
        var board = [];
        var ret = false;
        var winner;
        $('.square').each(function() {
            board.push($(this).attr('value'));
        });
        var turnCount = board.filter(function(i) {
            return i !== undefined;
        }).length



        for (var i = 0; i < players.length; i++) {
            if (players[player] === board[0] && players[player] === board[1] && players[player] === board[2]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[3] && players[player] === board[4] && players[player] === board[5]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[6] && players[player] === board[7] && players[player] === board[8]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[0] && players[player] === board[3] && players[player] === board[6]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[1] && players[player] === board[4] && players[player] === board[7]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[2] && players[player] === board[5] && players[player] === board[8]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[0] && players[player] === board[4] && players[player] === board[8]) {
                ret = true;
                winner = players[player];
            } else if (players[player] === board[2] && players[player] === board[4] && players[player] === board[6]) {
                ret = true;
                winner = players[player];
            }

            if (!ret && turnCount === 9) {
                ret = true;
            }
        }

        return {
            gameOver: ret,
            winner: winner
        };

    }


});
