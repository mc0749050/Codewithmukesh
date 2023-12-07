//welcome to codeWithMukesh Javascript
console.log("thanks for visit");

//side navigation bar 
let menustate = 1;
 
   function sidenav(){
     let sidenav = document.querySelector(".sidenav");
 
     if(menustate==1){
       menustate = 0;
       sidenav.style.display = "block";
     }
     else if(menustate==0){
       menustate = 1;
       sidenav.style.display = "none";
     }
    }
    
//thanks popup massage    
    function thanks(){
      
      let sidenav = document.querySelector(".sidenav");
 
     document.querySelector(".thanks").style.display = "block";
     sidenav.style.display = "none";
     menustate = 1;
    }
   
   function ofthanks(){
     document.querySelector(".thanks").style.display = "none";
   }
   
//text auto write 

var typed = new Typed('#autotext', {
  strings: ['website services','Html', 'css', 'Javascript', 'Php', 'Python', 'c','Java', 'c++'],
  typeSpeed: 100,
  backSpeed: 70,
  loop: true,
  startDelay: 1000,
});

function login(){
  document.querySelector(".loginbody").style.display = "block";
  document.querySelector(".sidenav").style.display = "none";
  menustate = 1;
}
function logout(){
  document.querySelector(".loginbody").style.display = "none";
}
function successfulof(){
  document.querySelector(".successfullogin").style.display = "none";
}
function successfulon(){
  document.querySelector(".successfullogin").style.display = "block";
  document.querySelector(".loginbody").style.display = "none";
  
}
