$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      let password = $('#password').val();
      let password_check = $('#password_check').val();
      let passwordError = $('#passwordError');
      
      if (password.length < 8) {
        passwordError.text('비밀번호는 8자 이상이어야 합니다.');
      } else if (!/\d/.test(password)) {
        passwordError.text('비밀번호는 최소한 하나의 숫자를 포함해야 합니다.');
      } else if (!/[a-z]/.test(password)) {
        passwordError.text('비밀번호는 최소한 하나의 소문자를 포함해야 합니다.');
      } else if (!/[A-Z]/.test(password)) {
        passwordError.text('비밀번호는 최소한 하나의 대문자를 포함해야 합니다.');
      } else if (!/[@#$%^&+=]/.test(password)) {
        passwordError.text('비밀번호는 최소한 하나의 특수문자를 포함해야 합니다.');
      } else if(password !== password_check){
        passwordError.text('비밀번호가 일치하지 않습니다');
      } else{
        passwordError.text('');
        $('form').unbind('submit').submit();
      }

    });
  });
  