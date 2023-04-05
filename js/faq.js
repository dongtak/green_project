// 아코디언 메뉴 설정********


$(document).ready(function() {
  $('.faqbox_question .question').click(function() {
    $(this).next('.answer').slideToggle(); //답변이 있는 다음 형제요소가 슬라이드 됨 (숨겨진 상태면 표시되고, 표시되어있으면 숨겨짐)
    $(this).parent().siblings().children('.answer').slideUp(); // 선택된 형제 요소들 중에서 answer인 자식요소들을 선택, 선택된 자식요소들을 위로 접히게함
    
  });
});


//$(this).next('.answer').slideToggle();- "답변" 클래스가 있는 다음 형제 요소가 슬라이드 애니메이션으로 토글됩니다. 즉, "대답" 요소가 현재 숨겨져 있으면 표시되고, 현재 표시되어 있으면 슬라이딩 동작으로 숨겨집니다.



// FAQ,Q&A 탭메뉴 설정**********

const qna = document.querySelector('.qna');
const qnabox = document.querySelector('#qnabox');
const faq= document.querySelector('.faq');
const faqbox = document.querySelector('.faqbox');


qna.addEventListener('click', function() {
  qnabox.style.display = "block";
  faqbox.style.display = "none";
  faq.style.color="rgb(192, 191, 191)";
  faq.style.borderBottom="none";
  qna.style.color="white";
  qna.style.borderBottom="3px solid white"

});


//클릭된 탭메뉴 color,borderbottom 구분

faq.addEventListener('click', function() {
  faqbox.style.display = "block";
  qnabox.style.display = "none";
  qna.style.color="rgb(192, 191, 191)";
  qna.style.borderBottom="none";
  faq.style.color="white";
  faq.style.borderBottom="3px solid white"
  
});


























