const navigation=document.querySelector('.navigation');
const nav_toggle=document.querySelector('.mobile-nav-toggle');

nav_toggle.addEventListener('click',()=>{
    const visibility=navigation.getAttribute('data-visible');
    if(visibility==="false"){
        navigation.setAttribute('data-visible',true);
        nav_toggle.setAttribute('aria-expanded',true);
    }else if(visibility==="true"){
        navigation.setAttribute('data-visible',false);
        nav_toggle.setAttribute('aria-expanded',false);
    }
})