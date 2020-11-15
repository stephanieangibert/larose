let el =document.getElementById("turbulence");
const h1=document.querySelector("h1");
// console.log(h1);
const h3=document.querySelectorAll("h3");
const dev=document.querySelectorAll(".dev");
const gris=document.querySelectorAll(".gris");
const image=document.getElementsByTagName("img");
const second=document.getElementById("second");
let scroll2=document.querySelector(".scroll2");



 const tl=gsap.timeline();

    tl
    .to(el,3, {attr: { baseFrequency: '0 0'},repeat:-1});


 window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    let value2=window.scrollY*0.5;
    let value3=window.scrollY*0.15;
    let value4=window.scrollY*0.001+1;
    // console.log(value4);
    // console.log(value);
    if(value<300){
        h1.style.transform="translateY("+value2+"px)";  
        h3[0].style.transform="translateY("+value3+"px)";
        h3[1].style.transform="translateY("+value3+"px)";
        h3[2].style.transform="translateY("+value3+"px)";
        dev[0].style.transform="translateY("+value3+"px)";
        dev[1].style.transform="translateY("+value3+"px)";      
        gris[0].style.transform="translateY("+value3+"px)"; 
        image[0].style.transform="scale("+value4+")";
      
       
        tl     
        .to(scroll2,{opacity:0},0)  
        .to(tableauSpan,{opacity:0},0)
        .to(premiere,{opacity:1,ease:Power1.easeOut,duration:2},2)  
        .to(second,{top:1000,left:0,position:"fixed",ease:Power1.easeOut,duration:0.1},2.5) 
     
    
    }
   else if(value>300 && value<600){
        h1.style.transform="translateY("+value2+"px)";
        h3[0].style.transform="translateY("+value3+"px)";
        h3[1].style.transform="translateY("+value3+"px)";
        h3[2].style.transform="translateY("+value3+"px)";
        dev[0].style.transform="translateY("+value3+"px)";
        dev[1].style.transform="translateY("+value3+"px)";      
        gris[0].style.transform="translateY("+value3+"px)";
        tl
        .to(scroll2,{opacity:0})
        .to(tableauSpan,{opacity:0})
//        console.log(value2);
//    tl
//    .to(image,{scale:1.6,ease:Power1.easeIn},1.7)

   }
   else if(value>601){
       tl
       .to(premiere,{opacity:0.5,ease:Power1.easeOut,duration:1},1)          
       .to(second,{top:0,left:0,position:"fixed",ease:Power1.easeOut},2.5) 
       .to(second,{opacity:0.5,ease:Power1.easeOut,duration:0.5},3)
       .to(second,{opacity:1,ease:Power1.easeOut,duration:0.5},3.5)
       
   }
 })

 

document.addEventListener("mousemove",function(e){
    scroll2.style.cssText="left: "+(e.clientX-100)+"px; top: "+(e.clientY-100)+"px";
    // console.log(e.clientX);
    let value4=e.clientX*0.2;
   
    
  
})