var menu = document.getElementById('menu');
var menuItem = document.querySelectorAll('.header_nav a');
menu.onclick  = () => {    
    for(var i =0; i < menuItem.length; i++) {
        if(menuItem[i].classList.contains('show_menu')) {
            menuItem[i].classList.remove('show_menu');
        } else {
            menuItem[i].classList.add('show_menu');
        }    
    }
}