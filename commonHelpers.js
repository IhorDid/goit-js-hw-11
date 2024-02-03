import{i as a,S as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector("form"),m=document.querySelector('input[type="text"]'),i=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper");function f(){u.style.display="block"}function p(){u.style.display="none"}function h(t){return`
  <li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
<ul class="parametrs-items">
<li class="parametrs-item"><h4>Likes</h4><span>${t.likes}</span></li>
<li class="parametrs-item"><h4>Views</h4><span>${t.views}</span></li>
<li class="parametrs-item"><h4>Comments</h4><span>${t.comments}</span></li>
<li class="parametrs-item"><h4>Downloads</h4><span>${t.downloads}</span></li>
</ul>
</li>
`}p();c.addEventListener("submit",t=>{t.preventDefault();const s=m.value.trim();if(!s){a.error({title:"Error",message:"Please enter a search query!",position:"topCenter"});return}c.reset(),f(),i.innerHTML="",fetch(`https://pixabay.com/api/?key=42170319-af092c1d236dd53a733e41db9&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(p(),!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0)a.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",messageColor:"#fff"});else{i.innerHTML="";const n=o.hits.map(r=>h(r));i.innerHTML=n.join(""),new d(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}}).catch(o=>console.log(o))});
//# sourceMappingURL=commonHelpers.js.map
