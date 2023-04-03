
// faq 아코디언 메뉴 설정

let question = document.getElementsByClassName("question");

            for (let i = 0; i < question.length; i++) {
                question[i].onclick = function() {
                    this.classList.toggle("active");
                    let answer = this.nextElementSibling;
                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                };
            }






// let question = document.getElementsByClassName("question");

// for (let i = 0; i < question.length; i++) {
//     question[i].onclick = function() {
//         this.classList.toggle("active");
//         let answer = this.nextElementSibling;
//     if (answer.style.display === "block") {
//         answer.style.display = "none";
//     } else {
//         answer.style.display = "block";
//     }
//   };
// }

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
//   return true;
//   }
  
//   function validatePasswordSpecialCharacters(pwd) {
//     if (!/[@#$%^&*()\-_=+\\\|\[\]{};:'",.<>\/?]/.test(pwd)) {
//       alert("비밀번호는 특수문자를 1자리 이상 사용하여 입력하시오.");
//       return false;
//     }
//     return true;
//   }


//1. 비밀번호, 비밀번호 확인 입력값
//2. 두 값이 같은지


// pwd_check.js 파일에 저장한 경우


function Check(){
  event.preventDefault();
  const pwd = document.getElementById('pwd').value;
  const pwdCheck = document.getElementById('pwd_check').value;
  const regExp = /^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+-=])[A-Za-z0-9!@#$%^&*()_+-=]{8,12}$/;
  
  
  if(!regExp.test(pwd)){
    alert('8자~12자 사이로 입력해주세요.')
    return false;
  }else if(pwd !== pwdCheck) { //password 동일한지 확인
      alert("비밀번호가 다릅니다.");
      document.getElementById('pwd_check').value="";
      document.getElementById('pwd_check').focus();
    
      return false;
}else{
  return true;
}
}
// const pwd = document.getElementsById('.pwd');
// const pwd_check = document.getElementsById('.pwd_check');
// const submit = document.getElementsByClassName('.submit');

// const reg = /^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+-=])[A-Za-z0-9!@#$%^&*()_+-=]{6,12}$/;



// document.querySelector('.button').onclick = function(){
//   const pwd = document.getElementById('pwd').value;
//    const pwd_check = document.getElementById('pwd_check').value;

//    if(pwd !==pwd_check){
//     alert("비밀번호를 확인해주세요.")
//     return false
//    }else{
//     return true
//    }
// }