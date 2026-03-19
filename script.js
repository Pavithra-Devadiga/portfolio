const words = ["Programmer", "Web Developer", "Tech Enthusiast"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.querySelector(".typing").textContent =
currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,120);
}

type();


document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", function(){
navLinks.classList.toggle("active");
});

});
