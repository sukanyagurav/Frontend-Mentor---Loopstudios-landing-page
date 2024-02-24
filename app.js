const nav= document.querySelector('.nav-container')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',function(e){
    if(nav.classList.contains('active')){
        nav.classList.remove('active')
    }
    else{
        nav.classList.add('active')
    }
})
