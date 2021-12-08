// Selecting all elements within website:

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

//When "start quiz" button is clicked:
start_btn.onclick = () =>{
    info_box.classList.add("activeInfo");
}

//When "exit quiz" button is clicked:
exit_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
}

//When "continue button" is clicked:
continue_btn.onclick = () =>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

//When "restart quiz" button clicked:
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
}

//When "quit quiz" button is clicked:
questions.quiz =() =>{
    window.location.reload();
}

//When "next button" is clicked:
next_btn.onclick = () => {
    if (que_count < questions.length - 1){
        que_count ++;
        que_numb ++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else {
        clearInterval(counter);
        clearInterval(counterLine);
    }
}

// Get Questions and answers form Array to display:
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
}

let que_tag = '<span>' + questions[index].numb + ". " + questions [index] .question + '</span>';
let option_tag = '<div class ="option><span>' + questions[index].options[0]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[1]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[2]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[3]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[4]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[5]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[6]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[7]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[8]+'</span></div>'
                + '<div class="option><span>' + questions[index].options[9]+'</span></div>'
que_text.innerHTML = que_tag;
option_list.innerHTML = option_tag;
