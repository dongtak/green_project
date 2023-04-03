
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
  if (password.length < 8) {
    messageDiv.innerText = "8자 이상 입력";
    return false;
  }

  // 비밀번호에 영어 대/소문자, 숫자, 특수문자가 포함되어 있는지 확인
  const regex = /^(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).+$/;
  if (!regex.test(password)) {
    messageDiv.innerText =
      "특수문자 포함 입력";
    return false;
  }

//비밀번호가 일치하는지 확인
if (password !== pwdCheck){
    messageDiv.innerHTML = "비밀번호 불일치";
    return false;
}else{

 alert('문의해주셔서 감사합니다.')
  return true;
}};

// 제출 버튼 클릭 시 비밀번호 유효성 검사 실행
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  validatePassword();
});






// Q&A설정**********








function qnaReturn(){
  let result = confirm('취소하시겠습니까?')
  
  if(result==true){
    let answer = "확인";
    window.location.href="./faq.html#qnabox_page"
  //  let qnabox = document.getElementById("qnabox");
  //   let faqbox = document.getElementById("faqbox"); 
    qnabox.style.display = "block";
      faqbox.style.display = "none";
  
  
    }else{
   
    
    }
  }
  


  