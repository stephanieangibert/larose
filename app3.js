const cercle=document.querySelector(".cercle");
const three=document.getElementById("three");
let vrai=true;
cercle.addEventListener("click",()=>{
    
    cercle.classList.toggle("barreQuiBouge");
   if(vrai){
    tl 
    .to(premiere,{opacity:0,ease:Power1.easeOut,duration:1}) 
    .to(second,{opacity:0.5,ease:Power1.easeOut,duration:1})   
    .to(three,{top:0,left:0,position:"fixed",ease:Power1.easeOut}) 
    .to(three,{opacity:1,ease:Power1.easeOut,duration:0.5})
    vrai=false;

   }else{
    tl 
    .to(premiere,{opacity:0,ease:Power1.easeOut,duration:1}) 
    .to(second,{opacity:1,ease:Power1.easeOut,duration:1})   
    .to(three,{top:0,left:0,position:"fixed",ease:Power1.easeOut}) 
    .to(three,{opacity:0,ease:Power1.easeOut,duration:0.5})

   }
   vrai!=vrai;
  
})