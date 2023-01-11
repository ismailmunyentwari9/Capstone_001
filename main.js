


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
 close_button.addEventListener('click', ()=>{
    menu.style.display="none";
    openHambuger.style.display='block'; 
    close_button.style.display='none';
 })

 /* menu dropdown codes for about page.......*/
 const openHambugerAbout=document.getElementById('hambuger_about  img');
 const menuAbout=document.getElementById('hide_menu_about');
 const close_buttonAbout= document.getElementById('close_button_about');
 /*open button */
 openHambugerAbout.addEventListener('click', ()=>{
    menuAbout.style.display="block";
    openHambugerAbout.style.display='none'; 
    close_buttonAbout.style.display='block';
 })


 /* clossing button ...*/
 close_button.addEventListener('click', ()=>{
    menuAbout.style.display="none";
    openHambugerAbout.style.display='block'; 
    close_buttonAbout.style.display='none';
 })



