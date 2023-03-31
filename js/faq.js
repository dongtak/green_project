
// FAQ 아코디언 메뉴 설정

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


//게시글 등록 비밀번호 유효성 검사(회원가입과 합칠수있는지 확인하기)

// const pwd = document.getElementsById('.pwd');
// const id = document.getElementsById('.writer');

// function validatePassword(pwd){

//   if( pwd.length<6 || pwd.length>12 ){
//   return false;

//   }
//   return ture;
//   }
  
//   function validatePasswordSpecialCharacters(pwd) {
//     if (!/[@#$%^&*()\-_=+\\\|\[\]{};:'",.<>\/?]/.test(pwd)) {
//       alert("비밀번호는 특수문자를 1자리 이상 사용하여 입력하시오.");
//       return false;
//     }
//     return true;
//   }
