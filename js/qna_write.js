
//비밀번호 유효성검사********************





// HTML 요소 가져오기
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const messageDiv = document.getElementById("message");
const passwordCheck = document.getElementById("password_check")

// 비밀번호 유효성 검사 함수
 function validatePassword() {
  const password = passwordInput.value;
  const pwdCheck = passwordCheck.value;

  // 비밀번호 길이가 8자 이상인지 확인
  // if (password.length < 8) {
  //   messageDiv.innerText = "8자 이상 입력";
  //   // messageDiv.style.visibility = "visible";
  //   // passwordCheck.style.borderColor = "red";
  //   // passwordInput.style.borderColor = "red";
  //   return false;
  // }

  // // 비밀번호에 영어 대/소문자, 숫자, 특수문자가 포함되어 있는지 확인
  // const regex = /^(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).+$/;
  // if (!regex.test(password)) {
  //   messageDiv.innerText =
  //     "특수문자 포함 입력";
  //     // messageDiv.style.visibility = "visible";
  //     // passwordCheck.style.borderColor = "red";
  //     // passwordInput.style.borderColor = "red";
  //   return false;
  // }
  // 비밀번호가 일치하는지 확인
  if (password !== pwdCheck){
    messageDiv.innerHTML = "비밀번호 불일치";
    messageDiv.style.visibility = "visible";
    passwordCheck.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return false;
    // 비밀번호가 공백일 경우
  }else if(password === "", pwdCheck===""){
    messageDiv.innerHTML = "비밀번호를 입력해주세요";
    messageDiv.style.visibility = "visible";
    passwordCheck.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return false;
  }

  // 유효성 검사가 모두 통과한 경우
  messageDiv.style.visibility = "hidden";
  passwordCheck.style.borderColor = "initial";
  passwordInput.style.borderColor = "initial";
  return true;
}



//제출버튼 클릭시 오류

submitButton.addEventListener('click',function myFunction() {
  var form = document.getElementById("qnaform");
  if (form.checkValidity() === false || !validatePassword()){
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  
  alert('문의해주셔서 감사합니다.');
  window.location.href = "../faq.html";
  return true;
  

});




// Q&A설정**********


function qnaReturn(){
  let result = confirm('취소하시겠습니까?')
  
  if(result==true){
    let answer = "확인";
    
  //  let qnabox = document.getElementById("qnabox");
  //   let faqbox = document.getElementById("faqbox"); 
  //   qnabox.style.display = "block";
  //     faqbox.style.display = "none";
  //     history.go(href="faq.html#qna_writebox")
  
  
    }else{
   
    
    }
  }
  




// // 제출 버튼 클릭 시 비밀번호 유효성 검사 실행
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (validatePassword()) {
//     alert('문의해주셔서 감사합니다.');
//     window.location.href = "faq.html"
//   }
// });



// function myFunction() {
//   let form = document.getElementById("form");
//   if (form.checkValidity() === true) {
//   validatePassword();
//   form.submit(); // 모든 필수 입력란이 유효한 경우 form을 제출
//   }
//   else {
//   // 값이 유효하지 않은 경우에 대한 처리 (예: 에러 메시지 출력)
//   }
//   }






//비밀번호가 일치하는지 확인
// if (password !== pwdCheck){
//     messageDiv.innerHTML = "비밀번호 불일치";
//     messageDiv.style.visibility = "visible";
//     passwordCheck.style.borderColor = "red";
//     passwordInput.style.borderColor = "red";
    
//     return false;

// }else{

//  alert('문의해주셔서 감사합니다.')
//   return true;
  
// }};

// // 제출 버튼 클릭 시 비밀번호 유효성 검사 실행
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   validatePassword();

  
//     passwordCheck.style.borderColor = "initial";
//     passwordInput.style.borderColor = "initial";
// });










  