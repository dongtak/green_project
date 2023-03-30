   // 모바일 버튼 스크립트(수정할게욥)
function hamburger(){
    document.addEventListener("touchmove", function (e) {
        let mobileBtn = document.querySelector(".mobile_btn");
        let header = document.querySelector("header");
        if (e.touches[0].pageY > 0 && !hamburger.checked) {
          mobileBtn.style.display = "none";
          header.style.display = "none";
        } else {
          mobileBtn.style.display = "block";
          header.style.display = "block";
        }
      });
    
      hamburger.addEventListener("change", () => {
        let mobileBtn = document.querySelector(".mobile_btn");
        if (hamburger.checked) {
          mobileBtn.style.display = "block";
        } else if (document.documentElement.pageYOffset === 0) {
          mobileBtn.style.display = "block";
        } else {
          mobileBtn.style.display = "none";
        }
      });
};
