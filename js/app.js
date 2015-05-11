$(document).ready(function() {

    var players = ['X', 'O'];
    var playerSVG = ['<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="69.247864mm" height="69.247864mm" viewBox="0 0 245.36645 245.36645" version="1.1"><style>.s0{fill:none;stroke-width:15.63562679;stroke:#000;}</style><g transform="translate(0,-806.99577)"><path transform="matrix(0.70710678,-0.70710678,0.70710678,0.70710678,0,0)" d="m-572.14056 587.77625 2.08173 0 0 312.71252-2.08173 0zM-745.1734-727.45593l2.08174 0 0 312.71252-2.08174 0" class="s0"/><path transform="matrix(-0.70710678,-0.70710678,0.70710678,-0.70710678,0,0)" d="m-745.1734-727.45593 2.08174 0 0 312.71252-2.08174 0z" class="s0"/></g></svg>', '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="69.247864mm" height="69.247856mm" viewBox="0 0 245.36644 245.36641" version="1.1"><g transform="translate(-296.79263,-260.4939)"><path d="M535.27095 383.17734A115.7953 115.7953 0 0 1 419.47565 498.97264 115.7953 115.7953 0 0 1 303.68034 383.17734 115.7953 115.7953 0 0 1 419.47565 267.38203 115.7953 115.7953 0 0 1 535.27095 383.17734Z" style="fill:none;stroke-miterlimit:4;stroke-width:13.77540779;stroke:#000"/></g></svg>']
    var player = 0;
    var gameState = {};

    $('.square').click(function() {

        var square = $(this);

        if (square.attr('value') === undefined && !gameState.gameOver) {

            $(this).html(playerSVG[player]);
            var svg = new Walkway('#' + $(this).attr('id'));
            svg.draw();
            setTimeout(function(){$('path').css('stroke-dasharray', '0')}, 300);
            $(this).attr('value', players[player]);
            gameState = getWinner();
            if (gameState.gameOver && gameState.winner) {
                setTimeout(function(){alert("Player " + gameState.winner + " has won!")}, 600);
            } else if (gameState.gameOver) {
                setTimeout(function(){alert("The game has ended in a tie!")}, 600);
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
