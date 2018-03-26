$(document).ready(function () {

    //counter object for starting countdown

    var index = 0;
    var clockCounter = {
        time: 20,
        reset: function () {
            this.time = 20;
            $('.clock').append('<h3>' + 'Time Remaining:    ' + this.time + '</h3>');
        },

        start: function () {
            counter = setInterval(clockCounter.count, 1000);
        },

        stop: function () {
            clearInterval(counter);
        },

        count: function () {
            clockCounter.time--;

            $('.clock').html(clockCounter.time);
            if (clockCounter.time >= 0) {
                $('.clock').html('<h3> Time Remaining:  ' + clockCounter.time + '</h3>');
            } else {
                index++;
                wrongAnswer();
                countdownTimer.reset();

                if (index < questions.length) {
                    loadQuestion(index);
                } else {
                    $('#choices').hide();
                    showScore();
                }
            }
        }
    }


    //start the game and hide the button once clicked
    // $('body').click('#startbutton', function () {
    //     $("#buttoncontrol").hide();
    //     $("#container").show();
    //     clockCounter.reset();
    //     clockCounter.start();
    // });

    $("#container").hide();



    //Global Variables to start the process
    var choices = ['a', 'b', 'c', 'd'];
    var answers = ["a1", 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];


    //Last page that will show the score of the game and resets the game
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;



    //Objects for each question, choice, selection, answer and image

    var q1 = {
        question: 'This founding father invented bifocals and wore them often?',
        choices: ['a-  Theodore Roosevelt', 'b-  George Washington', 'c-  Benjamin Franklin', 'd-  John Adams'],
        selection: [false, false, true, false],
        answer: 'Benjamin Franklin',
        image: 'assets/images/Benjamin Franklin.jpg',
    }


    var q2 = {
        question: 'This President the senior amongst the founding fathers owned the largest whiskey distillery in the 1700’s?',
        choices: ['a-  George Washington', 'b-  John Dickinson', 'c-  Samuel Adams', 'd-  Ronald Reagan'],
        selection: [true, false, false, false],
        answer: 'George Washington',
        image: 'assets/images/George Washington.jpg'
    }

    var q3 = {
        question: 'This founding father and President wrote over nineteen thousand letters and kept copies of them all letters and his book collection started the Library of Congress?',
        choices: ['a-  Jammes Madison', 'b-  John Hancock', 'c-  Bill Clinton', 'd-  Thomas Jefferson'],
        selection: [false, false, false, true],
        answer: 'Thomas Jefferson',
        image: 'assets/images/James Monroe',
    }

    var q4 = {
        question: 'As President and founding father he has held more publicly elected offices than any other past or present President in the United States?',
        choices: ['a-  James Monroe', 'b-	 Barrack Obama', 'c-  Henry Clay', 'd-  Millard Fillmore'],
        selection: [true, false, false, false],
        answer: 'James Monroe',
        image: 'assets/images/James Monroe',
    }

    var q5 = {
        question: 'This founding father held the office of Vice President and thought that is was the most insignificant office that was invented by man?',
        choices: ['a-  Richard Nixon', 'b-  Patrick Henry', 'c-  John Adams', 'd-	 Nathaniel Gorham'],
        selection: [false, false, true, false],
        answer: 'John Adams',
        image: 'assets/images/John Adams',
    }

    var q6 = {
        question: 'What founding leader started the Treasury department, created the first bank in the United States and was killed in a gun dual later in life?',
        choices: ['a-	 Alexander Hamilton', 'b-  Jimmy Carter', 'c-  John Jay', 'd-  Richard Henry Lee'],
        selection: [true, false, false, false],
        answer: 'Alexander Hamilton',
        image: 'assets/images/Alexander Hamilton',
    }

    var q7 = {
        question: 'He was the smallest President of the United States?',
        choices: ['a-  James Madison', 'b-  Dwight D. Eisenhower', 'c-  George W. Bush', 'd-  Paul Revere'],
        selection: [true, false, false, false],
        answer: 'James Madison',
        image: 'assets/images/James Madison'
    }

    var q8 = {
        question: 'Besides a strong signature this founding father was known for smuggling items such as tea to avoid British taxation?',
        choices: ['a-	 Alexander Hamilton', 'b-  Aaron Burr', 'c-  John Kennedy', 'd-  John Hancock'],
        selection: [false, false, false, true],
        answer: 'John Hancock',
        image: 'assets/images/John Hancock'
    }

    var q9 = {
        question: 'Not a founding father, this individual is actually pictured on the label of Samuel Adams beer instead of the founding father and is not yelling anything on the label?',
        choices: ['a-  John Jay', 'b-	 Abraham Lincoln', 'c-  Paul Revere', 'd-  Samuel Adams'],
        selection: [false, false, true, false],
        answer: 'Paul Revere',
        image: 'assets/images/Paul Revere'
    }

    var q10 = {
        question: 'He was a failed tobacco farmer and turned down an offer from George Washington to become the first Secretary of State?',
        choices: ['a-	 William Penn', 'b-	 Patrick Henry', 'c-  Alexander Hamilton', 'd-  Gerald Ford'],
        selection: [false, true, false, false],
        answer: 'Patrick Henry',
        image: 'assets/images/Patrick Henry'
    }

    var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    //object to pull the question and choices to populate the form
    function loadQuestion(questionSelected) {
        clockCounter.reset();
        $('#question').html('<h2>' + questions[questionSelected].question + '</h2>');
        $('#choiceA').append('<p>' + questions[questionSelected].choices[0] + '</p>');
        $('#choiceB').append('<p>' + questions[questionSelected].choices[1] + '</p>');
        $('#choiceC').append('<p>' + questions[questionSelected].choices[2] + '</p>');
        $('#choiceD').append('<p>' + questions[questionSelected].choices[3] + '</p>');
    }

    //start button, click to start the game, hide the button and start counter, 
    function setup() {
        index = 0;
        $('#buttoncontrol').append('<button id="startbutton">' + 'Start' + '</button>');
        $('#startbutton').on('click', function () {
            $(this).hide();
            $("#container").show();
            clockCounter.start();
            loadQuestion(index);
        });

    }

    setup();

    function getAnswer() {
        $('.selections').on('click', function () {
            $('#question').text(' ');
            $('#choiceA').text(' ');
            $('#choiceB').text(' ');
            $('#choiceC').text(' ');
            $('#choiceD').text(' ');
            nextQuestion();
        })
    }

    //correct answer link to populate image and display message
    function correctAnswer() {
        correct++;
        alert("You got It!");
    }

    //Incorrect answer post the correct answer, message and image
    function wrongAnswer() {
        incorrect++;
        alert("Incorrect");
    }

    //score board to show correct, incorrect and unanswered also to reset game
    function score() {
        $('#question').empty();
        $('#questions').append('<h3><p>' + correct + " correct</p></h3>");
        $('#questions').append('<h3><p>' + wrong + " correct</p></h3>");
        clockCounter.stop();
        $('.clock').empty();
    }

    $('.selections').on('click', function () {
        if (this.id == 'choiceA') {
            var selection = 'a';
        } else if (this.id == 'choiceB') {
            selection = "b";
        } else if (this.id == 'choiceC') {
            selection = "c";
        } else if (this.id == 'choiceD') {
            selection = "d";
        }
        if ((selection == 'a') && (questions[index].selection[0] == true)) {
            correctAnswer();
        } else if (selection == 'a') {
            wrongAnswer();
        }

        if ((selection == 'b') && (questions[index].selection[1] == true)) {
            correctAnswer();
        } else if (selection == 'b') {
            wrongAnswer();
        }

        if ((selection == 'c') && (questions[index].selection[2] == true)) {
            correctAnswer();
        } else if (selection == 'c') {
            wrongAnswer();
        }

        if ((selection == 'd') && (questions[index].selection[3] == true)) {
            correctAnswer();
        } else if (selection == 'd') {
            wrongAnswer();
        }

        $('#question').text(' ');
        $('#choiceA').text(' ');
        $('#choiceB').text(' ');
        $('#choiceC').text(' ');
        $('#choiceD').text(' ');
        index++;

        if (index < questions.length) {
            loadQuestion(index);
        } else {
            $('.selectons').hide();
            showScore();
        }

    })

});