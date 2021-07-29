const question = document.querySelectorAll(".question");

for(let q of question){
    let answer = q.nextElementSibling;
    let arrow = q.children[0];
    console.log(q.children);
    q.addEventListener("click", ()=>{
        answer.classList.toggle("answer-show");
        q.classList.toggle("question-show");
        arrow.classList.toggle("arrow-show");
    });
}