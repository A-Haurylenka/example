let name = document.getElementById('name');
let phone = document.getElementById('phone');
let form = document.querySelector('form');


const validateName = (name) => {
    let validate = /[a-zа-я]+ *[a-zа-я]+/gi;
    if(validate.test(name)) {
        return true;
    }
    return false;
};

const validatePhone = (phone) => {
    let validate = /[\+*\d+]{7,15}/g;
    if(validate.test(phone)) {
        return true;
    }
    return false;
};

var alertText = '';
const makeAlertText = () => {
    if (validateName(name.value) && validatePhone(phone.value)) {
        return  alertText = 'Dear ' + name.value + '! Thanks for choosing us';
    } else {
        return alertText = 'Sorry! Incorrect data';
    }
};

const createElem = (tagName, className, text) => {
    let elem = document.createElement(tagName);
    elem.classList.add(className);
    if(text) {
        elem.textContent = text;
    }
    return elem;
}


var backgroundContainer = createElem('div', 'absolute');
var closer = createElem('span', 'closer', '[x]');

form.onsubmit = function(event) {   
    event.preventDefault();  
    var alert = createElem('div', 'alert' , makeAlertText());
    document.body.append(backgroundContainer); 
    alert.append(closer);
    document.body.append(alert); 
    closer.onclick = function() {        
        backgroundContainer.remove();
        alert.remove();            
    }
    document.onkeydown = function(e) {
        if(e.keyCode == 27) {
            backgroundContainer.remove();
            alert.remove(); 
        }
    }
    name.value = '';
    phone.value = '';      
};

