const button = document.querySelector(".started");
const page2 = document.querySelector(".page2");
const back = document.querySelector(".direction1");
const next = document.querySelector(".direction2");
const page3 = document.querySelector(".page3");

button.addEventListener("click",()=>{
    page2.style.right = "0";
});

back.addEventListener("click", ()=>{
    page2.style.right = "-100%";
})

next.addEventListener("click",()=>{
    page3.style.right = "0";
})