import{S as u,i as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const g=r=>{const e=new URLSearchParams({key:"44362034-5d7ab655544c2caf430070a80",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${e}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})};function d(r){return r.hits.map(e=>`<li class="gallery-item">
  <a class="img-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
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
</li>`).join("")}const f="/goit-js-hw-11/assets/errorSvg-843d4981.svg",h="/goit-js-hw-11/assets/cautionSvg-75a3a476.svg",a=document.querySelector(".form");document.querySelector(".form-input");const l=document.querySelector(".loader"),m=document.querySelector(".gallery");let p=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});a.addEventListener("submit",r=>{if(r.preventDefault(),!a.input.value.trim()){a.reset();return}m.innerHTML="",l.classList.remove("visually-hidden"),g(a.input.value.trim()).then(e=>{e.total||c.error({iconUrl:f,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m.insertAdjacentHTML("afterbegin",d(e)),p.refresh(),l.classList.add("visually-hidden")}).catch(e=>{l.classList.add("visually-hidden"),c.warning({iconUrl:h,position:"topRight",message:`${e}`})}),a.reset()});
//# sourceMappingURL=commonHelpers.js.map
