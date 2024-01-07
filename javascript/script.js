
function resposiveNav() {

    let hamb = document.querySelector("#nav-img");
    let resNav = document.querySelector("#res-nav");
    let flag = 0;
  
    hamb.addEventListener("click", () => {
      if (flag == 0) {
        resNav.style.top = 10 + 'vh';
        flag = 1;
      } else {
        resNav.style.top = -100 + 'vh';
        flag = 0;
      }
  
    })
  }
  resposiveNav();
  

setTimeout(() => {
    var first =document.querySelector('#first')
    first.style.top=-200+'vh';
    
}, 4000);