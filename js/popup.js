let showPopup = document.getElementById('write_us');
let popup = document.getElementById('popup');


showPopup.addEventListener('click', function(){   
    popup.classList.remove('hide_popup')
    document.querySelector('.closer').addEventListener('click', function() {
        popup.classList.add('hide_popup');        
    });
    document.onkeydown = function(e) {
        if(e.keyCode == 27) {
            popup.classList.add('hide_popup'); 
        }
    }
});

var commentContainer = document.querySelector('.happy_clients_container');
var submitComment = document.querySelector('form');
var nameComment = document.getElementById('newName');
var textComment = document.getElementById('comment');

var arr = ['img/human1.png', 'img/human2.jpg', 'img/human3.jpg', 'img/human4.jpg'];
var randomSrc = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}


var newListComment = () => {  
    var newComment = document.createElement('div');      
    var newCommentName = document.createElement('h3');
    var newCommentText = document.createElement('p');
    var newImg = document.createElement('img');    
    var closerComment = document.createElement('span');    
    newCommentName.textContent = nameComment.value;        
    newCommentText.textContent = textComment.value;     
    newImg.src = randomSrc(arr);    
    closerComment.classList.add('closer');
    closerComment.textContent = '[x]';
    newComment.append(newImg);
    newComment.append(newCommentName);
    newComment.append(newCommentText);
    newComment.append(closerComment);    
    return newComment;
}


submitComment.addEventListener('submit', function(event) {
    event.preventDefault();          
    commentContainer.append(newListComment());
    popup.classList.add('hide_popup');    
    nameComment.value = '';
    textComment.value = '';  
    var commentCloser = document.querySelectorAll('.closer');     
    for(var i = 0; i < commentCloser.length; i++) {
        commentCloser[i].onclick = function () {
            var div = this.parentElement;
            div.classList.add('hide_popup');
        }
    }   
});






