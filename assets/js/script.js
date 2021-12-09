// Selecting all elements within website:
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

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
    quiz_box.classList.add("activeQuiz"); 
}

