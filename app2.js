const tableauLettres=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let hasard=0;
let lettre=0;

for(let i=0;i<tableauLettres.length;i++){
  hasard=Math.floor(Math.random()*26);
  lettre=tableauLettres[i];
  tableauLettres[i]=tableauLettres[hasard];
  tableauLettres[hasard]=lettre;
}

 const tableauLettresmelangees=[];

 for(i=0;i<10;i++){
     tableauLettresmelangees.push(tableauLettres[i]);
 }

 let titreCentre=document.querySelector(".titreCentre");
 for(let i=0;i<tableauLettresmelangees.length;i++){
    let span=document.createElement("span"); 
    let apparitionLettre=second.insertBefore(span,titreCentre);
   span.innerHTML= tableauLettresmelangees[i];
} 
console.log(tableauLettresmelangees);
const tableauSpan=document.querySelectorAll("span");


document.addEventListener('mousemove',(e)=>{
  
    for(i=0;i<tableauSpan.length;i++){
      
        let taille=(Math.random()*100)+12;      
        let hasard1=e.clientX+Math.floor(Math.random()*350);
        let hasard2=e.clientY+Math.floor(Math.random()*50);        
        tableauSpan[i].style.cssText="left: "+hasard1+"px; top: "+hasard2+"px";
        tableauSpan[i].style.fontSize=1+taille+'px';
        tableauSpan[i].classList.add("spanOpac"); 
      
      
    }

})


let imageCentrale=document.querySelector('.imgDico');
let titreH1=document.querySelector(".h1Second");
const tableauPhoto=["images/dico.jpg","images/marguerite.jpg","images/woodtype.jpg","images/incunable.jpg","images/focus.jpg","images/captatio.png"];
const tableauH1=["Dictionnaire","Marguerite","Woodtype","Incunable","Focus","Captatio benevolentiae"];

let j=0;
scroll2.addEventListener("click",()=>{

  if(j>tableauPhoto.length-2){
   
    j=0;   
      titreH1.innerHTML=tableauH1[j];     
      imageCentrale.setAttribute("src",tableauPhoto[j]);  
      imageCentrale.classList.add("rotation");
     
  }else{   
   j++;
   titreH1.innerHTML=tableauH1[j];
   imageCentrale.setAttribute("src",tableauPhoto[j]);
   imageCentrale.classList.add("rotation");
 
  }  

    console.log(j);
})
 
scroll2.addEventListener('click',()=>{
    setTimeout(function(){ imageCentrale.classList.remove("rotation"); }, 550);
    
   
})

