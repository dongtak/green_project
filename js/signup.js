function checkz(){
    var getName = RegExp(/^[가-힣]+$/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    // var phone1 = $("#phone.aa1").val();
    // var phone2 = $("#phone.aa2").val();
    // var phone3 = $("#phone.aa3").val();
    // var phoneNumber = phone1 + phone2 + phone3;
    // var getPhone = RegExp(/^(01[016789]{3})[0-9]{3,4}[0-9]{4}$/);
    // var getPhone = RegExp(/^(01[016789]{1})(\d{3,4})(\d{4})$/);
    // var phonenum = $('#phone').val();
    // var regPhone = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;
    var phoneFirst = $('#phone-first').val();
    var phoneSecond = $('#phone-second').val();
    var phoneThird = $('#phone-third').val();
    var regPhone = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;
    var phone = phoneFirst + '-' + phoneSecond + '-' + phoneThird;
    

    //이름 유효성
    if (!getName.test($("#name").val())){
        alert("성함을 입력해 주세요!");
        $("#name").val("");
        $("#name").focus();
        return false;
    }


    //아이디 유효성 검사
    if(!getCheck.test($("#uid").val())){
        alert("아아디 형식의 맞게 입력해 주세요");
        $("#uid").val("");
        $("#uid").focus();
        return false;

    }
    
    //아이디 공백 확인
    if($("#uid").val() == ""){
        alert("아이디를 입력해 주세요");
        $("#uid").focus();
        return false;
    }

    //비밀번호
    if(!getCheck.test($("#pwd").val())){
        alert("형식에 맞춰서 패스워드를 입력해 주세요");
        $("#pwd").val("");
        $("#pwd").focus();
        return false;  
    }

    // 아이디랑 비밀번호랑 같은지 체크
    if($("#uid").val()==($("#pwd").val())){
        alert("아이디와 비밀번호가 똑같습니다");
        $("$pwd").val("");
        $("$pwd").focus();
    }

    //비밀번호 똑같은지 재확인
    if($("#pwd").val() != ($("#pwd2").val())){
        alert("비밀번호가 일치하지 않습니다. ");
        $("#pwd").val("");
        $("#pwd2").val("");
        $("#pwd").focus();
        return false;
    }

    //이메일 공백 확인
    if($("#email").val() == ""){
        alert("이메일을 입력해 주세요");
        $("#email").focus();
        return false;
    }

    //이메일 유효성 검사
    if(!getMail.test($("#email").val())){
        alert("이메일 형식에 맞게 입력해 주세요");
        $("#email").val("");
        $("#email").focus();
        return false;
    }

    if (!regPhone.test(phone)) {
        alert('잘못된 휴대폰 번호입니다.');
        $('#phone-first').focus();
        return false;
      }

    // if (isuidValid && ispwdValid && ispwdConfirmationValid && isPhoneValid) {
    //     // 모든 조건이 충족되었을 때 index.html 페이지로 이동합니다.
    //     window.location.href = "index.html";
    // }
      

    // if(!regPhone.test(phonenum)){

    //     alert('잘못된 휴대폰 번호입니다.');
      
    //     $('#phone').focus();
      
    //     return false;    
      
    //    }
    // if (!getPhone.test("#phone.aa")) {   
    //     alert("휴대폰 번호가 옳바르지 않습니다!");
    //     $("##phone.aa1").val("");
    //     $("##phone.aa2").val("");
    //     $("#phone.aa3").val("");
    //     $("#phone.aa1").focus();
    //     return false;
    // }
    // return false;
}

// // 전화번호

// $("#phone").val($("#phone1").val() + $("#phone2").val() + $("#phone3").val());

// if ($("#phone").val() == "" || $("#phone").val().length != 11 || isNaN($("#phone").val())) {

//      alert("휴대폰번호를 정확히 입력해 주세요");

//      return false;

// }

// if (isNaN($("#phone").val())) {

//      alert("휴대폰번호를 숫자로만 입력해 주세요");

//      return false;

// }

// for (var i=0; i<$("#phone").val().length; i++)  {

//      var chk = $("#phone").val().substring(i,i+1);

//      if(chk == " "){

//           alert("휴대폰번호를 정확히 입력해주세요");

//           return false;

//      }

// }