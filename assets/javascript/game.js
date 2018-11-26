$(document).ready(function () {


    var targetNumber = 0;
    var totalScore = 0;
    var wins = 0;
    var loss = 0;
    var c1, c2, c3, c4;

    //Generate random numbers and assign the values to crystals
    setValues();
    
    // on click 

    $(".one").on("click", function () {

        calculate(c1);

    });
    $(".two").on("click", function () {

        calculate(c2);


    });
    $(".three").on("click", function () {

        calculate(c3);

    });
    $(".four").on("click", function () {

        calculate(c4);

    });

    function calculate(crystalVlaue) {


        if (totalScore === targetNumber) {

            wins = wins + 1;
            $("#wins").text("Wins : " + wins);
            setValues();

        }
        else if (totalScore > targetNumber) {

            loss = loss + 1;
            $("#loss").text("Loss : " + loss);
            setValues();

        }
        else {
            totalScore += crystalVlaue;
            $("#total").text(totalScore);
        }

    }

    function setValues() {

        targetNumber = randomNumberGen(19, 120);
        totalScore = 0;

        $("#targetNumber").text(targetNumber);
        $("#total").text(totalScore);

        $("#wins").text("Wins : " + wins);
        $("#loss").text("Loss : " + loss);

        c1 = randomNumberGen(1, 12);
        c2 = randomNumberGen(1, 12);
        c3 = randomNumberGen(1, 12);
        c4 = randomNumberGen(1, 12);
    }
    
    function randomNumberGen(x, y) {

        return Math.floor(Math.random() * ((y - x) + 1) + x);

    }



});


