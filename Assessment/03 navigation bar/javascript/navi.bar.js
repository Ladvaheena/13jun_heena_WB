$(document).ready(function(){
    $('.icon').click(function(){
        $('ul').slideToggle();
    });
});
function changeIcon(){
let i = document.querySelector('.icon i')
if(i.classList == 'fa-solid fa-bars')
{
    i.style.transform = "scale(1.5)"
    i.classList.remove('fa-bars')
    i.classList.add('fa-circle-xmark')
}
else
{
    i.classList.remove('fa-circle-xmark')
    i.classList.add('fa-bars')
    i.style.transform = "scale(1)"
    
}
console.log(i.classList)
}
