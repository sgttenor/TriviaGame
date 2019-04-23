document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});
////function buildQuiz(){

//

//function showResults(){

//}

// display quiz right away
//buildQuiz();

// on submit, show results
