let sp = 0;
const slide = document.getElementsByClassName("items")
const slides = [...slide]
const total_slides = slides.length;

function next() {  
    
    if(sp<total_slides-1)
    {
        sp++;
        slides[sp-1].classList.remove("active")
        slides[sp].classList.add("active")
        // console.log("next:",sp)
    } 
}

function prev() {
    if(sp>0)
    {
        // console.log("prev:",sp)
        slides[sp].classList.remove("active")
        slides[sp-1].classList.add("active")
        sp--;
    }
}