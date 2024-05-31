(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}})();const m=[{srcset:"./img/project4-mob-1x.jpg 1x, ./img/project4-mob-2x.jpg 2x",media:"(max-width: 767px)",srcsetTab:"./img/project4-tab-1x.jpg 1x, ./img/project4-tab-2x.jpg 2x",mediaTab:"(min-width: 768px)",srcsetDesk:"./img/project4-desk-1x.jpg 1x, ./img/project4-desk-2x.jpg 2x",mediaDesk:"(min-width: 1280px)",imgSrc:"./img/project4-mob-1x.jpg",alt:"project 4",techStack:"React, JavaScript, Node JS, Git",title:"Project 4",buttonText:"Visit"},{srcset:"./img/project5-mob-1x.jpg 1x, ./img/project5-mob-2x.jpg 2x",media:"(max-width: 767px)",srcsetTab:"./img/project5-tab-1x.jpg 1x, ./img/project5-tab-2x.jpg 2x",mediaTab:"(min-width: 768px)",srcsetDesk:"./img/project5-desk-1x.jpg 1x, ./img/project5-desk-2x.jpg 2x",mediaDesk:"(min-width: 1280px)",imgSrc:"./img/project5-mob-1x.jpg",alt:"project 5",techStack:"React, JavaScript, Node JS, Git",title:"Project 5",buttonText:"Visit"},{srcset:"./img/project6-mob-1x.jpg 1x, ./img/project6-mob-2x.jpg 2x",media:"(max-width: 767px)",srcsetTab:"./img/project6-tab-1x.jpg 1x, ./img/project6-tab-2x.jpg 2x",mediaTab:"(min-width: 768px)",srcsetDesk:"./img/project6-desk-1x.jpg 1x, ./img/project6-desk-2x.jpg 2x",mediaDesk:"(min-width: 1280px)",imgSrc:"./img/project6-mob-1x.jpg",alt:"project 6",techStack:"React, JavaScript, Node JS, Git",title:"Project 6",buttonText:"Visit"}];let s=0;document.querySelector(".load-more-button").addEventListener("click",()=>{const p=document.querySelector(".projects-list"),r=document.createDocumentFragment();for(let c=0;c<3;c++){if(s>=m.length){document.querySelector(".load-more-button").style.display="none";break}const t=m[s],e=document.createElement("li");e.classList.add("projects-list-items"),e.innerHTML=`
            <picture>
              <source srcset="${t.srcset}" media="${t.media}" /> 
              <source srcset="${t.srcsetTab}" media="${t.mediaTab}" />
              <source srcset="${t.srcsetDesk}" media="${t.mediaDesk}" /> 
              <img src="${t.imgSrc}" alt="${t.alt}" width="320" height="180" class="projects-item-img">
            </picture>
            <div class="tech-stack">${t.techStack}</div>
            <div class="projects-item-title">${t.title}</div>
            <button class="projects-btn">${t.buttonText}</button>
          `,r.appendChild(e),s++}p.appendChild(r)});
//# sourceMappingURL=commonHelpers.js.map