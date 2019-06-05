$(document).ready(function () {
    var score = 0;
    var wins = 0;
    var losses = 0;
    var numberToGet = 0;
    resetGame();

    $(".crystal-image").on("click", function () {
        score += parseInt($(this).val());
        $("#score").html(score);

        if (score == numberToGet) {
            wins++;
            alert("Winner!");
            resetGame();
        }
        if (score > numberToGet) {
            losses++;
            alert("Sorry you lost.");
            resetGame();
        }
    });

    if (score == numberToGet) {
        wins++;
        alert("Winner!");
        resetGame();
    }
    if (score > numberToGet) {
        losses++;
        alert("Sorry you lost.");
        resetGame();
    }

    function resetGame() {
        score = 0;
        numberToGet = Math.floor((Math.random() * 102) + 19);
        $("#red").val(Math.floor((Math.random() * 12) + 1));
        $("#yellow").val(Math.floor((Math.random() * 12) + 1));
        $("#green").val(Math.floor((Math.random() * 12) + 1));
        $("#blue").val(Math.floor((Math.random() * 12) + 1));
        $("#goal").html(numberToGet);
        $("#score").html(score);
        $("#wins").html(wins);
        $("#losses").html(losses);

    }
});