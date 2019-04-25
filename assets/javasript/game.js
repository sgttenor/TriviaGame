//timer
function startTimer() {
    var counter = 90;
    setInterval(function () {
        //decrements the counter variable
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
    },
    {
        question: "In this movie released in 2012 the world is threatened by an alien invasion. An agency known as the S.H.I.E.L.D brings some of the world's best heroes together to fight off the invasion. They have a tough time working together at first, however. Many of them have trouble getting along and their powers can at times be unpredictable. The Heroes include Iron Man, Thor, The Incredible Hulk, and Captain America. Name the movie.",

        answers: {
            a: "X-men",
            b: "Justice League",
            c: "Avengers",
            d: "Watchmen"
        },
        correctAnswer: "c"
    },
    {
        question: "In this movie, a small town sheriff in Alaska must fight the forces of evil. When his town is preyed upon by bloodsucking creatures of the night during a month without daylight, he sacrifices himself to protect his family.",

        answers: {
            a: "From Hell",
            b: "From Dusk Till Dawn",
            c: "Blade",
            d: "30 Days of Night"
        },
        correctAnswer: "d"
    },
    {
        question: " In this Harry Potter movie Harry returns to Hogwarts for his fourth year. This year the Tri-Wizard Tournament is being held at Hogwarts against two other wizard schools. The competition can become deadly and only three wizards aged 17 and older are selected. However, Harry, who is only 14, is selected as the fourth contestant. We later find out that Harry was set up. Harry must compete in all three events. After the third event Harry is transported to a graveyard where Cedric is killed and Voldemort returns. Harry fights Voldemort and barely returns to Hogwarts. Name the movie.",

        answers: {
            a: "Harry Potter and the Goblet of Fire",
            b: "Harry Potter and the Prisoner of Azkaban",
            c: "Harry Potter and the Chamber of Secrets",
            d: "Harry Potter and the Order of the Phoenix"
        },
        correctAnswer: "a"
    },
    {
        question: "-2 pints of Tommy Lee Jones -5 3/4 cups of special serum -1 shield (preferably made of vibranium) -1 colorful suit -41,000 icicles One of these movies listed below can be made by combining these ingredients. Which movie is it?",

        answers: {
            a: "Thor",
            b: "Captain America: The First Avenger",
            c: "X-Men: First Class",
            d: "Iron Man"
        },
        correctAnswer: "b"
    },
    {
        question: "Released in 1992, this historical epic was acclaimed for its cinematography and musical score. It is based on the book by James Fenimore Cooper and set during the French and Indian War. The film stars Daniel Day-Lewis and Madeleine Stowe. Name it.",

        answers: {
            a: "Patriot",
            b: "1776",
            c: "The New World",
            d: "The Last of the Mohicans"
        },
        correctAnswer: "d"
    },
    {
        question: "This 1984 ghostly film starred two 'Saturday Night Live' alumni and a woman who encountered some very strange ghosts.",

        answers: {
            a: "The Ghost Within",
            b: "Ghostbusters",
            c: "Ghost Stories",
            d: "Ghost"
        },
        correctAnswer: "b"
    },
    {
        question: "-100 oz. of Peter Jackson -1/2 cup of Gollum -1/2 cup of Smeagol -1 crown -11 Oscars *Side note: To be cooked over the fires of Mount Doom. Which of the following movies can be made by using all of the ingredients listed above?",

        answers: {
            a: "The Lord of the Rings: The Fellowship of the Ring",
            b: "The Lord of the Rings: The Two Towers",
            c: "The Lord of the Rings: The Return of the King",
            d: "The Hobbit"
        },
        correctAnswer: "c"
    },
    {
        question: "-4 cups of Bob Barker -1/2 of a hockey stick -1 golf ball -1 alligator eye -1 nail These ingredients can be combined to make which of the following movies?",

        answers: {
            a: "Happy Gilmore",
            b: "Billy Madison",
            c: "The Waterboy",
            d: "Mr Deeds"
        },
        correctAnswer: "da"
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
               //loop that will push out each question and answer choices to the screen
                answers.push(
                    //radio dials for possible answers
                    `<label>
                    
                      <input type="radio" name="question${questionNumber}"
                value="${letter}">

                       ${letter} :

                       ${currentQuestion.answers[letter]}


                    </label>`
                );
            }
            //pushes the question and answers to the page
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }

    );
    //displays the questions and answers
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


            // color the correct answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank answers red
            //
            answerContainers[questionNumber].style.color = "red";
        }
    });

    // show number of correct answers out of total
    $("#results").html("You Got " + numCorrect + " out of " + myQuestions.length);
   
}
submitButton.addEventListener("click", showResults);


buildQuiz();
