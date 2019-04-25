//timer
function startTimer() {
    var counter = 45;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            $("#timer").html('Sorry, out of time');
            clearInterval(counter);
            $("#time-results").html("<h3>YOU RAN OUT OF TIME!!!!</h3>");
            showResults();
            
        }
    }, 1000);
}

//Click start
$("#gameStart").click(function () {
    startTimer();
    
});

//question and answer array 
const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const myQuestions = [
    {
        question: "What actress was Tom Cruise's first wife?",
        answers: {
            a: "Mimi Rodgers",
            b: "Nicole Kidman",
            c: "Katie Holmes"
        },
        correctAnswer: "a"
    },
    {
        question: "In 2007, Jim Carrey starred in a film in which his character was obsessed with what number?",
        answers: {
            a: "33",
            b: "23",
            c: "13",
            d: "43"
        },
        correctAnswer: "b"
    },
    {
        question: "One of the first science fiction films to be taken seriously by critics and movie-goers alike, this 1968 movie was made by Stanley Kubrick. Which film is this? ",
        answers: {
            a: "Alien",
            b: "The Thing",
            c: "Space Balls",
            d: "2001: A Space Odyssey"
        },
        correctAnswer: "d"
    },
    {
        question: "In the movie 'Gremlins', what is the name of the little Mogwai given to Billy?",

        answers: {
            a: "Spike",
            b: "Gadget",
            c: "Gizmo",
            d: "Alf"
        },
        correctAnswer: "c"
    },
    {
        question: "This title cyborg was nearly killed by a gang who worked for an evil corporation. The evil corporation then bought the police department and built him a new and improved body. ",

        answers: {
            a: "Robocop",
            b: "Time Cop",
            c: "Minority Report",
            d: "Terminator"
        },
        correctAnswer: "a"
    },
    {
        question: " In 'Flight of the Navigator', a boy was transported eight years into the future by this robot, who was also a spaceship?",

        answers: {
            a: "Saucerion",
            b: "Navigator",
            c: "Glaxiplon",
            d: "Trimaxion"
        },
        correctAnswer: "d"
    },
    {
        question: "Name the robot in the 1956 movie, 'Forbidden Planet'?",

        answers: {
            a: "Robbie",
            b: "Robert",
            c: "Robby",
            d: "Bobby"
        },
        correctAnswer: "c"
    },
    {
        question: "In 'A.I. - Artificial Intelligence', a couple adopted this robot after the death of their son. ",

        answers: {
            a: "Thomas",
            b: "David",
            c: "Samuel",
            d: "Joe"
        },
        correctAnswer: "b"
    },
    {
        question: "In 'Short Circuit', military robot 'five' was subject to a power surge and developed a consciousness. It moved in with Ally Sheedy and adopted this name. ",

        answers: {
            a: "Johnny Five",
            b: "Sammy Five",
            c: "Jimmy Five",
            d: "Tommy Five"
        },
        correctAnswer: "a"
    },
    {
        question: "This robot, from the movie 'Transformers' (the 2007 Michael Bay version), was the subject of a long running government cover-up called Project Iceman. ",

        answers: {
            a: "Bumblebee",
            b: "Starscream",
            c: "Optimus Prime",
            d: "Megatron"
        },
        correctAnswer: "d"
    }
];

//Create functoins for game

function buildQuiz() {
    //place to store HTML output
    var output = [];

    //for each question
    myQuestions.forEach(

        (currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}"
                value="${letter}">

                       ${letter} :

                       ${currentQuestion.answers[letter]}


                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }

    );
    $("#quiz").html(output.join(''));
    
}


function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;


            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
        }
    });

    // show number of correct answers out of total
    $("#results").html("You Got " + numCorrect + " out of " + myQuestions.length);
   
}
submitButton.addEventListener("click", showResults);
buildQuiz();
