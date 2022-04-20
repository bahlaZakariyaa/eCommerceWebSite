const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');

if(bar){
    bar.addEventListener('click', function(e){
        e.preventDefault();
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', function(e){
        e.preventDefault();
        nav.classList.remove('active');
    });
}