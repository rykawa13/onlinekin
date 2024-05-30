function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropem");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let styleMode=localStorage.getItem('styleMode');
const stt=document.getElementById('switch-style');

function enableLS(){
  document.body.classList.add('lightstyle');
  localStorage.setItem('styleMode','light');
}

function disableLS(){
  document.body.classList.remove('lightstyle');
  localStorage.setItem('styleMode',null);
}

stt.addEventListener('click',()=>{
  styleMode=localStorage.getItem('styleMode');
  if(styleMode!=='light'){
    enableLS();
  }
  else{
    disableLS();
  }
})
if(styleMode==='light'){
  enableLS();
}

window.onload = function(){
  let preloader=document.getElementById ('preloader');
  preloader.classList.add('hide-preloader');
  setTimeout(function() {
      preloader.classList.add('preloader-hidden');
  },1450)
}
