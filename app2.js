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

 let h1Second=document.querySelector(".h1Second");
 for(let i=0;i<tableauLettresmelangees.length;i++){
    let span=document.createElement("span"); 
    let apparitionLettre=second.insertBefore(span,h1Second);
   span.innerHTML= tableauLettresmelangees[i];
} 
console.log(tableauLettresmelangees);
const tableauSpan=document.querySelectorAll("span");


document.addEventListener('mousemove',(e)=>{
  
    for(i=0;i<tableauSpan.length;i++){
        tableauSpan[i].classList.add("spanOpac");
        let taille=(Math.random()*100)+12;      
        let hasard1=e.clientX+Math.floor(Math.random()*250);
        let hasard2=e.clientY+Math.floor(Math.random()*250);        
        tableauSpan[i].style.cssText="left: "+hasard1+"px; top: "+hasard2+"px";
        tableauSpan[i].style.fontSize=1+taille+'px';
       
        console.log(hasard1,hasard2);
    }

})

