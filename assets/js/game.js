$(document).ready(function () {
    //#region variables
    var btn1, btn2, btn3, btn4, goal
    var wins = 0
    var losses = 0
    var total = 0

    //#endregion

    //#region functions
    // randomly selects crystaland goal amount
    function numbers() {
        goal = Math.floor(Math.random() * 100) + 1
        btn1 = Math.floor(Math.random() * 10) + 1
        btn2 = Math.floor(Math.random() * 20) + 1
        btn3 = Math.floor(Math.random() * 5) + 1
        btn4 = Math.floor(Math.random() * 15) + 1
    }
    // resets game
    function reset() {
        var result = confirm("Reset game?")
        if (result == true) {
            numbers()
            total=0
            $(".scoreAmt").text(total)
            $(".target").text("Target score: " + goal)
        }
    }
    // adds to win or loss counter
    function win() {
        $(".scoreAmt").text(total);
        if (total == goal) {
            alert("Congratulations you win")
            wins++
            $(".wins").text("Wins: " + wins)
            reset()

        } else if (total >= goal) {
            alert("Congratulations you lose")
            losses++
            $(".losses").text("Losses: " + losses)
            reset()

        }

    }




    //#endregion

    //#region Main processes
    numbers()
    // displays target score
    $(".target").text("Target score: " + goal)


    // all the buttons for the crystals which increase total by their pre assigned random amount
    $(".button1").on("click", function () {
        total += btn1
        win()

    })

    $(".button2").on("click", function () {
        total += btn2
        win()

    })

    $(".button3").on("click", function () {
        total += btn3
        win()

    })

    $(".button4").on("click", function () {
        total += btn4
        win()

    })


    //#endregion




})