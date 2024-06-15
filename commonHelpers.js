import{S as u,i as n}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const g=s=>{const e=new URLSearchParams({key:"44362034-5d7ab655544c2caf430070a80",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${e}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})};function f(s){return s.hits.map(e=>`<li>
  <a class="img-link" href="${e.largeImageURL}">
    <img class="img-gallery" src="${e.webformatURL}" alt="${e.tags}" />
  </a>
  <ul class="img-list">
    <li class="img-item">
      <h3 class="img-title">Likes</h3>
      <p class="img-text">${e.likes}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Views</h3>
      <p class="img-text">${e.views}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Comments</h3>
      <p class="img-text">${e.comments}</p>
    </li>
    <li class="img-item">
      <h3 class="img-title">Downloads</h3>
      <p class="img-text">${e.downloads}</p>
    </li>
  </ul>
</li>`).join("")}const d="/goit-js-hw-11/assets/errorSvg-843d4981.svg",p="/goit-js-hw-11/assets/cautionSvg-75a3a476.svg",o=document.querySelector(".form");document.querySelector(".form-input");const c=document.querySelector(".loader"),m=document.querySelector(".gallery");let h=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.addEventListener("submit",s=>{if(s.preventDefault(),!o.input.value.trim()){o.reset();return}m.innerHTML="",c.classList.remove("visually-hidden"),g(o.input.value.trim()).then(e=>{e.total||n.error({iconUrl:d,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m.insertAdjacentHTML("afterbegin",f(e)),h.refresh(),c.classList.add("visually-hidden")}).catch(e=>{n.warning({iconUrl:p,position:"topRight",message:`${e}`})}),o.reset()});
//# sourceMappingURL=commonHelpers.js.map
