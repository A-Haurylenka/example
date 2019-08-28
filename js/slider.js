
var slidesContainer = document.querySelector('.laptop_container');
var slides = document.querySelectorAll('.laptop_slide');

let slider = [];
for(var i = 0; i < slides.length; i++) {
    slider[i] =  slides[i].src;
    slides[i].remove();
}
let step = 0;
let offset = 0;

const draw = () => {
    let img = createElem('img', 'laptop_slide');
    img.src = slider[step];
    img.style.left = offset*445 + 'px'
    slidesContainer.append(img);    
    if (step + 1 === slider.length) {
        step = 0;    
    } else {
        step++
    }
    offset = 1;
}

const leftShift = () => {
    let slides2 = document.querySelectorAll('.laptop_slide');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2*445 - 445 + 'px';
        offset2++;
    }
    setTimeout(function() {
        slides2[0].remove();
        draw();
    }, 1000);
    
}
draw(); draw()





var left = document.querySelector('.laptop_left');
left.onclick = leftShift;
//right.onclick = 






