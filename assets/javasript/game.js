function startTimer() {
    var counter = 5;
    setInterval(function () {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
           $("#timer").html('Sorry, out of time');
            clearInterval(counter);
        }
    }, 1000);
}

$("#gameStart").click(function () {
    startTimer();
});

//question and answer array 
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
            a: "Akien",
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
//  Execute the run function.
for( let i = 0; i < myQuestions.length; i++ ) {
    console.log(myQuestions)
}