(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),window.onscroll=()=>function(){const e=document.getElementById("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("js-no-transparency"):e.classList.remove("js-no-transparency")}(),(()=>{const e=document.querySelector("[data-about-modal-open]"),t=document.querySelector("[data-about-modal]"),o=document.querySelector("[data-about-modal-close]");e.addEventListener("click",(()=>{t.classList.toggle("is-hidden")})),o.addEventListener("click",(()=>{t.classList.toggle("is-hidden")}))})();new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,speed:1e3});
//# sourceMappingURL=index.5859611e.js.map
