var slideInit = () => {    
    var slideBackground = document.createElement('div');
    slideBackground.classList.add('absolute');  
    
    var slideCloser = document.createElement('span');
    slideCloser.classList.add('closer');
    slideBackground.append(slideCloser);
   
    return slideBackground;
}
var slideConteiner = document.querySelector('.about_us');
var slider1 = document.getElementById('work1');
var slider2 = document.getElementById('work2');
var slider3 = document.getElementById('work3');

slider1.onclick =  () => {    
    var bigSlide = document.createElement('img');
    bigSlide.classList.add('clone_slide');
    bigSlide.src = this.src;
    var listSlide = slideInit().append(bigSlide);
    slideConteiner.append(listSlide);
}



