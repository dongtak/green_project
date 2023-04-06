// const form =  document.getElementById('form');
// const id = document.getElementById('id');
// const password = document.getElementById('password');

// form.addEventListener('summit', e => {
//    e.preventDefault(); /* 양식이 제출 되는 것을 방지하기 위해 이벤트에 pre-- 메서드를 호출. */

//    validateInputs();
// });

// function validateInputs() {
//     const idvalue = idvalue.value.trim();
//     const passwordValue = password.value.trim();

//     if (idvalue === '') {
//         setError(id, 'id is required');
//     } else {
//         setSuccess(id);
//     }

//     if (passwordValue === '') {
//         setError(password, 'password is required');
//     } else if (passwordValue.length < 8) {
//         setError(password, 'password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }
// }
// 로그인 유효성 체크
function loginChk() {
    var getCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
  
    // 아이디 공백 확인
    if ($("#uid").val() == "") {
      alert("아이디를 입력해 주세요");
      $("#uid").focus();
      return false;
    }
  
    // 비밀번호 유효성 검사
    if (!getCheck.test($("#pwd").val())) {
      alert("아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
    //   $("#pwd").val("");
    //   $("#pwd").focus();
      return false;
    }
  
    // 유효성 검사 통과
    return true;
  }
  