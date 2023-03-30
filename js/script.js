window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementsByClassName("header");
  if (window.pageYOffset > 1) { // 스크롤이 100px 이상 내려갔을 때
    header.style.position = "fixed"; // position을 fixed로 변경
    // header.style.top = "0"; // top을 0으로 지정
  } else { // 스크롤이 100px 이하일 때
    header.style.position = "static"; // position을 static으로 변경
  }
}