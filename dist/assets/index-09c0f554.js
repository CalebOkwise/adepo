(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}})();$(document).ready(function(){$(window).on("resize",function(){var e=window.matchMedia("(max-width: 50em)");if(e.matches){var i=$("#linebreak");i.html(i.text().replace("ease on",`ease on
`))}else{var i=$("#linebreak");i.html(i.text().replace(`
ease on`," ease on"))}})});const q=document.querySelector(".primary-header"),m=document.querySelector(".mobile-nav-toggle"),u=document.querySelector(".primary-navigation");m.addEventListener("click",()=>{u.hasAttribute("data-visible")?m.setAttribute("aria-expanded",!1):m.setAttribute("aria-expanded",!0),u.toggleAttribute("data-visible"),q.toggleAttribute("data-overlay")});const g=document.querySelector(".icon-close");g.addEventListener("click",()=>{u.hasAttribute("data-visible")?g.setAttribute("aria-expanded","false"):g.setAttribute("aria-expanded","true"),u.toggleAttribute("data-visible"),q.style.backgroundImage=""});const B=document.querySelectorAll(".dropdown");B.forEach(e=>{const i=e.querySelector(".select"),n=e.querySelector(".caret"),o=e.querySelector(".menu"),t=e.querySelectorAll(".menu li"),c=e.querySelector(".select > .selected");c.innerText="Services",i.addEventListener("click",()=>{i.classList.toggle("select-clicked"),n.classList.toggle("caret-rotate"),o.classList.toggle("menu-open")}),t.forEach(r=>{r.addEventListener("click",()=>{c.innerText=r.innerText,i.classList.remove("select-clicked"),n.classList.remove("caret-rotate"),o.classList.remove("menu-open"),t.forEach(w=>{w.classList.remove("active")}),r.classList.add("active")})}),document.addEventListener("click",r=>{e.contains(r.target)||(i.classList.remove("select-clicked"),n.classList.remove("caret-rotate"),o.classList.remove("menu-open"))})});document.querySelector(".terms-and-conditions-checkbox");document.getElementById("submit-button");document.querySelector(".error-message");$(document).ready(function(){$("#open-popup").click(function(e){e.preventDefault(),$("#email").val(),$("#number-of-tons").val(),$("#pick-up-coordinate").val(),setTimeout(function(){$("body").addClass("active-popup"),$(".page-container").addClass("active-popup")},1e3)}),$(".close-btn, .page-container").click(function(e){($(e.target).is(".close-btn")||$(e.target).is(".page-container"))&&($("body").removeClass("active-popup"),$(".page-container").removeClass("active-popup"))})});function C(e){var i=document.querySelectorAll(".section-pre-footer-container, .section-pre-footer-container2, .section-pre-footer-container3"),n=document.querySelector(".section-pre-footer-container"+e);n.style.display="flex",i.forEach(function(o){o.classList.contains("section-pre-footer-container"+e)||(o.style.display="none")})}var R=document.querySelectorAll(".real-time-container"),I=document.querySelectorAll(".customer-container"),k=document.querySelectorAll(".good-management-container");R.forEach(function(e){e.addEventListener("click",function(){C(2)})});var I=document.querySelectorAll(".customer-container");I.forEach(function(e){e.addEventListener("click",function(){var i=document.querySelector(".section-pre-footer-container2"),n=document.querySelector(".section-pre-footer-container3");i.style.display="none",n.style.display="none";var o=document.querySelector(".section-pre-footer-container");o.style.display="flex"})});k.forEach(function(e){e.addEventListener("click",function(){C(3)})});const O=document.querySelectorAll(".indicator"),v=()=>{O.forEach(e=>{e.classList.remove("isActive")})};let s=null;const T=(e,i)=>{e.forEach(n=>{var c;const o=n.target.querySelector(".indicator"),t=n.target.querySelector(".section-list-text-header");if(n.isIntersecting&&o&&t){v(),console.log("is active"),o.classList.add("isActive"),t.style.color="#293037",s=o;const r=(c=n.target.previousElementSibling)==null?void 0:c.querySelector(".section-list-text-header");r&&(r.style.color="#686868")}})},P={threshold:.7},H=new IntersectionObserver(T,P),p=document.querySelectorAll(".indicator-text");p.forEach(e=>{H.observe(e)});let L=window.pageYOffset;window.addEventListener("scroll",()=>{const e=window.pageYOffset;if(e>L){if(s&&s.closest(".indicator-text").getBoundingClientRect().bottom<=0){const n=Array.from(p).filter(o=>{const t=o.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>=0});if(n.length>0){const t=n[n.length-1].querySelector(".indicator");t&&(v(),t.classList.add("isActive"),s=t)}}}else if(s&&s.closest(".indicator-text").getBoundingClientRect().top>window.innerHeight){const n=Array.from(p).filter(o=>{const t=o.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>=0});if(n.length>0){const t=n[0].querySelector(".indicator");t&&(v(),t.classList.add("isActive"),s=t)}}L=e<=0?0:e});window.addEventListener("load",function(){window.innerWidth<50*parseFloat(getComputedStyle(document.documentElement).fontSize)?handleSmallScreens():handleBigScreens(),handleWindowResize()});const V=document.querySelectorAll(".indicator1"),y=()=>{V.forEach(e=>{e.classList.remove("isactive")})};let a=null;const N=(e,i)=>{e.forEach(n=>{var c;const o=n.target.querySelector(".indicator1"),t=n.target.querySelector(".section-list-text-header1");if(n.isIntersecting&&o&&t){y(),o.classList.add("isactive"),t.style.color="#293037",a=o;const r=(c=n.target.previousElementSibling)==null?void 0:c.querySelector(".section-list-text-header1");r&&(r.style.color="#686868")}})},F={threshold:1},D=new IntersectionObserver(N,F),b=document.querySelectorAll(".indicator-text1");b.forEach(e=>{D.observe(e)});let A=window.pageYOffset;window.addEventListener("scroll",()=>{const e=window.pageYOffset;if(e>A){if(a&&a.closest(".indicator-text1").getBoundingClientRect().bottom<=0){const n=Array.from(b).filter(o=>{const t=o.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>=0});if(n.length>0){const t=n[n.length-1].querySelector(".indicator1");t&&(y(),t.classList.add("isactive"),a=t)}}}else if(a&&a.closest(".indicator-text1").getBoundingClientRect().top>window.innerHeight){const n=Array.from(b).filter(o=>{const t=o.getBoundingClientRect();return t.top<window.innerHeight&&t.bottom>=0});if(n.length>0){const t=n[0].querySelector(".indicator1");t&&(y(),t.classList.add("isactive"),a=t)}}A=e<=0?0:e});const X=document.getElementById("image1").getElementsByTagName("img")[0],Y=document.getElementById("image2").getElementsByTagName("img")[0],z=document.getElementById("image3").getElementsByTagName("img")[0],S=document.getElementById("bannerImage1");X.addEventListener("click",()=>E("public/images/img3.png"));Y.addEventListener("click",()=>E("public/images/img2.png"));z.addEventListener("click",()=>E("public/images/img1.png"));function E(e){S.src=e}const h=document.getElementById("bannerImageContainer"),M=document.getElementById("bannerImage"),f=document.querySelectorAll(".indicator-column div");let l=0;const d=["public/images/renewable-energy-image.png","public/images/img1.png","public/images/img2.png"];S.src=d[l];S.style.borderRadius="0";function x(){for(let e=0;e<f.length;e++)e===l?f[e].style.backgroundColor="#293037":f[e].style.backgroundColor="#B4B4B4"}x();function W(e){e.preventDefault();const i=50;e.changedTouches[0];const n=e.targetTouches[0].pageX;let o;h.addEventListener("touchmove",t=>{o=t.touches[0].pageX}),h.addEventListener("touchend",()=>{n-o>i?l=(l+1)%d.length:o-n>i&&(l=(l-1+d.length)%d.length),M.src=d[l],x()})}h.addEventListener("touchstart",W);
