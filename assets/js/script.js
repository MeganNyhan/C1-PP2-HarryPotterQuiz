// Selecting all elements within website:
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//When "Start Quiz" button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); 
}

// When "Exit Quiz" button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

// When "Continue Quiz" button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimer(0);
}

let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// When "restart quiz" button clicked:
restart_quiz_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions (que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

//When "Quit Quiz" button is pressed
quit_quiz.onclick = () =>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

//When "Next Button" is Pressed
next_btn.onclick = () => {
    if(que_count < questions.length -1 ){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine (widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timeText.tectContent = "Time Off";
            const allOptions = option_list.children.length;
            let correctAns = questions [que_count].answer;
            for (i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribut("class", "option correct");
                }
            }
        }
    }
}








