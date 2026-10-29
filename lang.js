(function(){var q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem('lang')}catch(e){}
var l=q||s||((navigator.language||'').toLowerCase().indexOf('vi')===0?'vi':'en');if(l!=='vi')l='en';
function apply(v){document.documentElement.dataset.lang=v;document.documentElement.lang=v}apply(l);
window.setLang=function(v){apply(v);try{localStorage.setItem('lang',v)}catch(e){}}})();
