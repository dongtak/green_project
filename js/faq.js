
// faq 아코디언 메뉴 설정

let question = document.getElementsByClassName("question");

for (let i = 0; i < question.length; i++) {
    question[i].onclick = function() {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
  };
}

//FAQ,Q&A 탭메뉴 설정

const qna = document.querySelector('.qna');
const qnabox = document.querySelector('.qnabox');
const faq= document.querySelector('.faq');
const faqbox = document.querySelector('.faqbox');

qna.addEventListener('click', function() {
  qnabox.style.display = "block";
  faqbox.style.display = "none";
});

faq.addEventListener('click', function() {
  faqbox.style.display = "block";
  qnabox.style.display = "none";
});


