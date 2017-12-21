var filmPic = document.querySelectorAll('.filmPic');
var filmItemContainer = document.querySelector('.filmItemContainer');
var image ="";
var player = document.querySelector('.playerBox');
var filterItems = document.querySelectorAll('.filterItems');
var btnAll = document.querySelector('.all');

//GENERER DIV ET IMAGE
   for (let j = 0; j < data.films.length; j++) {
   image += '  <div class="filmItem"><img class="filmPic" src="'+ data.films[j].img+'" alt=""></div>'
 }
filmItemContainer.innerHTML = image;

//LIER LES SRC AUX IMAGES
/*filmItemContainer.addEventListener('click', function(event){
  //console.log(event.target.parentElement.className);
})*/
var filmItem = document.querySelectorAll('.filmItem');
 for (let i = 0; i < filmItem.length; i++){
   filmItem[i].addEventListener('click', function(){
     console.log('play');
     player.setAttribute('src', data.films[i].src);
     player.play();
   })
 }

//FILTER
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function(){
    for (var i = 0; i < data.films.length; i++) {
      if(data.films[i].category !== this.dataset.genre){
      filmItem[i].style.display = 'none';
    } else {
      filmItem[i].style.display = '';
    }
  }
})
}

btnAll.addEventListener('click', function(){
  for (var a = 0; a < data.films.length; a++) {
    //bullshit
    if (data.films.category === this.dataset.gentre){
      filmItem[a].style.display = 'block';
    }
  }
})
