window.onload = function(){
  document.getElementByClassName('close').onclick = function(){
    var v = document.getElementByClassName('promo');
    v.style.display = "none";
  };
};;
      
      
      
      
      window.addEventListener("scroll", function () {
        let header = document.querySelector("nav");
        let windowPosition = window.scrollY > 500;
        header.classList.toggle("scrolling-active", windowPosition);
      });
      const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

