
//비밀번호 유효성검사********************


// HTML 요소 가져오기
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const messageDiv = document.getElementById("message");
const passwordCheck = document.getElementById("password_check")

// 비밀번호 유효성 검사 함수, input안의 값이 같은지 검사하기위해
 function validatePassword() {
  const password = passwordInput.value;
  const pwdCheck = passwordCheck.value;

  // 비밀번호 길이가 6자 이상인지 확인, 길이가 6자 미만이면 메세지출력,상자 테두리 빨간색으로 보이게
  if (password.length < 6) {
    messageDiv.innerText = "6자 이상 입력";
    messageDiv.style.visibility = "visible";
    passwordCheck.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return false;
  }

  
  // 비밀번호가 일치하는지 확인, 비밀번호 불일치시 메세지출력,상자 테두리 빨간색으로 보이게
 if (password !== pwdCheck){
    messageDiv.innerHTML = "비밀번호 불일치";
    messageDiv.style.visibility = "visible";
    passwordCheck.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return false;
  }

    // 비밀번호가 공백일 경우, 메세지 출력, 상자 테두리 빨간색으로 보이게
  else if(password === "", pwdCheck===""){
    messageDiv.innerHTML = "비밀번호를 입력해주세요";
    messageDiv.style.visibility = "visible";
    passwordCheck.style.borderColor = "red";
    passwordInput.style.borderColor = "red";
    return false;
  }
   
  return true;
}


//form 요소가 유효하지 않거나, 비밀번호가 유효하지 않으면, 이벤트를 중지하고 함수를 종료
//만약 form 요소가 유효하고, 비밀번호도 유효하면, "문의해주셔서 감사합니다."라는 경고창을 띄우고, true를 반환
//제출버튼 클릭시 오류,폼 데이터 유효성 검사 수행

////////////기존 내용
// submitButton.addEventListener('click',


function qnaFunction(event) {
  let form = document.getElementById("qnaform");
  if (form.checkValidity() === false || !validatePassword()){  // checkValidity()값이 유효한지 체크, validatePassword() 비밀번호 유효성 검사 로직
    event.preventDefault(); //유효성 검사가 실패한 경우 폼 제출 (기본동작)중지,이벤트의 고유적으로 가지고있는 기본동작중지,페이지가 새로고침되지않고 사용자가 지정한 동작 처리할수있게
    event.stopPropagation(); //중복처리방지,상위 요소들의 이벤트 핸들러가 호출되지 않게함
    return false;
  }
 
  alert('문의해주셔서 감사합니다.');

  window.location.href="faq.html";

  return true;
  

}



function qnaReturn(){
  let result = confirm('취소하시겠습니까?')
  
  
  if(result==true){
    let answer = "확인";
    window.location.href="faq.html";

    }else{
   

    }
  }
  
////////기존내용


// submitButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   if (validatePassword()) {
//     qnaFunction(event);
//   }
// });

// function qnaFunction(event) {
//   let form = document.getElementById("qnaform");
//   if (form.checkValidity() === false || !validatePassword()){
//     return false;
//   }
//   alert('문의해주셔서 감사합니다.');
//   window.location.href="faq.html";
//   return true;
// }

// function  {
//   
//   return true;
// }










// );

// function validateAndSubmit(event) {
//   if (validatePassword()) { // validatePassword() 함수가 true를 반환하는 경우에만 폼 제출
//     qnaFunction(event); // qnaFunction() 함수 호출
//   }
// }


















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










  