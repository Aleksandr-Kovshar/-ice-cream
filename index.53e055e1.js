var offset=100,scrollUp=document.querySelector(".button-up"),getTop=function(){return window.pageYOffset};window.addEventListener("scroll",(function(){getTop()>offset?scrollUp.classList.add("button-up--visible"):scrollUp.classList.remove("button-up--visible")})),scrollUp.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.53e055e1.js.map
