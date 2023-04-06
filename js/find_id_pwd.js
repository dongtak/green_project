function findchk1() {
    var getName = RegExp(/^[가-힣]+$/);
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

    //이름 공백 확인
    if(!getName.test($("#name").val())){
        alert("성함을 입력해 주세요");
        $("#name").val("");
        $("#name").focus();
        return false;
    }

    //이메일 공백 확인
    if($("#email1").val() == ""){
        alert("이메일을 입력해 주세요");
        $("#email1").focus();
        return false;
    }
}

function findchk2(){
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

    //아이디 공백 확인(유효성)
    if($("#uid").val() == "") {
        alert("아이디를 입력해 주세요");
        $("#uid").focus();
        return false;
    }

    //이메일 공백 확인
    if($("#email2").val() == ""){
        alert("이메일을 입력해 주세요");
        $("#email2").focus();
        return false;
    }
}