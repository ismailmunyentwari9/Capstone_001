const more= document.querySelector('#click_more');
const less= document.querySelector('#click_less');
const hiden= document.querySelector('.hiden');


more.addEventListener('click',()=>{
   hiden.style.display='block';
   less.style.display='block';
   more.style.display='none';
  
})


less.addEventListener('click',()=>{
    hiden.style.display='none';
    less.style.display='none';
    more.style.display='block';
   
  
 })


 /* menu dropdown codes.......*/
 const openHambuger=document.querySelector('.hambuger img');
 const menu=document.querySelector('.hide-menu');
 const close_button= document.querySelector('.close_button');
 /*open button */
 openHambuger.addEventListener('click', ()=>{
    menu.style.display="block";
    openHambuger.style.display='none'; 
    close_button.style.display='block';
 })


 /* clossing button ...*/
 closeMenu.addEventListener('click', ()=>{
    menu.style.display="none";
    openHambuger.style.display='block'; 
    close_button.style.display='none';
 })





 /* menu dropdown codes for about page.......*/
 const openHambugerAbout=document.getElementById('hambuger > img');
 const menuAbout=document.getElementById('hide-menu');
 const close_buttonAbout= document.getElementById('close_button');
 /*open button */
 openHambugerAbout.addEventListener('click', ()=>{
    menuAbout.style.display="block";
    openHambugerAbout.style.display='none'; 
    close_buttonAbout.style.display='block';
 })


 /* clossing button ...*/
 closeMenuAbout.addEventListener('click', ()=>{
    menuAbout.style.display="none";
    openHambugerAbout.style.display='block'; 
    close_buttonAbout.style.display='none';
 })



