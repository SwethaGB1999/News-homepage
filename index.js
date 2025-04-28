const openBtn=document.querySelector('.openbtn');
const sideBar=document.querySelector('.sidebar');
const closeBtn=document.querySelector('.closebtn');
const mediaQuery=window.matchMedia('(min-width:50em)');
const spacedBar=document.querySelector('.spaced');

openBtn.addEventListener('click',function(){
    sideBar.style.display="flex";});
    
closeBtn.addEventListener('click',function(){

    sideBar.style.display='none';
});

if(mediaQuery.matches){

    spacedBar.style.display='flex';
    sideBar.classList.add('hide');

}else{
    spacedBar.style.display='none';
}


