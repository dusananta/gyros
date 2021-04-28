/*var menu = document.querySelector('#menu');
var list = document.querySelector('#subMenuUl');
var subMenu = document.querySelector('#subMenu');
var listItem = document.querySelectorAll(".list");
menu.addEventListener('mousemove', function(){
    subMenu.style.display='block';
})
subMenu.addEventListener('mousemove', function(){
    this.style.display='none';
})
*/
var mobileMenuIcon = document.getElementById('mobileDown');
var unorderedList = document.getElementById('mobileUlItem')
var preloader = document.getElementById('loading');
var counter = 0;
var x = document.body.clientWidth;//window.matchMedia("(max-width: 575.96px)");
mobileMenuIcon.addEventListener('click', dropDown);
console.log(x);
window.addEventListener('resize', function(){
    if(window.innerWidth>750){
        unorderedList.style.display='flex';
    }else{
        unorderedList.style.display='none';
    }
})
function dropDown(){
    counter++;
    console.log(counter)
    if(counter==1){
        unorderedList.style.display='block';
        unorderedList.style.transition='all 1s'
    }else if(counter==2){
        unorderedList.style.display='none';
        unorderedList.style.transition='linear 1s'
        counter=0;
    }
}
function Preloader(){
    preloader.style.display='none';
}







