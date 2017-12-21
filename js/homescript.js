var filmPic = document.querySelectorAll('.filmPic');
var filmItemContainer = document.querySelector('.filmItemContainer');
var image = "";
var player = document.querySelector('.playerBox');
var filterItems = document.querySelectorAll('.filterItems');
var btnAll = document.querySelector('.all');
var btnYear = document.querySelectorAll('.years');
var descTitle = document.querySelector('.descTitle');
var descDur = document.querySelector('.descDur');
var descAuth = document.querySelector('.descAuth');
var descRate = document.querySelector('.descRate');
var descCat = document.querySelector('.descCat');
var descDesc = document.querySelector('.descDesc');
var descYear = document.querySelector('.descYear');
var movieAll = document.querySelector('.movieAll');
var searchbar = document.querySelector('.searchbar');
var notes = document.querySelectorAll('.ratingInfo');

//GENERER DIV ET IMAGE
for (let j = 0; j < data.films.length; j++) {
  image += '  <div class="filmItem"><img class="filmPic" src="' + data.films[j].img + '" alt=""></div>'
}
filmItemContainer.innerHTML = image;

//LIER LES SRC AUX IMAGES
/*filmItemContainer.addEventListener('click', function(event){
  //console.log(event.target.parentElement.className);
})*/
var filmItem = document.querySelectorAll('.filmItem');
for (let i = 0; i < filmItem.length; i++) {
  filmItem[i].addEventListener('click', function() {
    console.log('play');
    player.setAttribute('src', data.films[i].src);
    player.play();
  })
}

//FILTER
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].category !== this.dataset.genre) {
        filmItem[i].style.display = 'none';
      } else {
        filmItem[i].style.display = '';
      }
    }
  })
}

btnAll.addEventListener('click', function() {
  for (var a = 0; a < data.films.length; a++) {
    //bullshit
    if (data.films.category === this.dataset.gentre) {
      filmItem[a].style.display = 'block';
    }
  }
})

//FILTER PAR ANNEE
for (var b = 0; b < btnYear.length; b++) {
  btnYear[b].addEventListener('click', function() {
    console.log('hi');
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].year != this.dataset.year) {
        filmItem[i].style.display = 'none';
      } else {
        filmItem[i].style.display = '';
      }
    }
  })
}


//FILTRER AVEC LE INPUT
searchbar.addEventListener('keypress', function() {
  for (var i = 0; i < data.film.length; i++) {
    if (searchbar.value !== data.film[i].category) {
      console.log(searchbar.value);
    }
  }
})

//CHANGER LE ALL MOVIE
for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener('click', function() {
    for (var a = 0; a < data.films.length; a++) {
      if (data.films[a].category === this.dataset.genre) {
        //filmItem[i].style.display = 'none';
        movieAll.innerHTML = data.films[a].category;
      }
    }
  })
}

btnAll.addEventListener('click', function() {
  for (var a = 0; a < data.films.length; a++) {
    //bullshit
    if (data.films.category == this.dataset.gentre) {
      movieAll.innerHTML = "All movies";
    }
  }
})

for (var b = 0; b < btnYear.length; b++) {
  btnYear[b].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].year == this.dataset.year) {
        movieAll.innerHTML = 'All movie in ' + data.films[i].year;
      }
    }
  })
}

//GENERER LES INFOS
//GENERER LES INFOS DES VIDEOS
for (let i = 0; i < data.films.length; i++) {
  filmItem[i].addEventListener('click', function() {

    var tit = data.films[i].title;
    var dur = data.films[i].duration;
    var auth = data.films[i].author;
    var authLink = data.films[i].author_url;
    var desc = data.films[i].description;
    var rate = data.films[i].rating;
    var cat = data.films[i].category;
    var annee = data.films[i].year;

    //GENERER LES NOTES

    for (var j = 0; j < 5; j++) {
      notes[j].classList.remove("noted");
    }
    for (var j = 0; j < rate; j++) {
      notes[j].classList.add("noted");
    }

    descTitle.innerHTML = data.films[i].title;
    descDur.innerHTML = dur;
    descAuth.innerHTML = auth;
    descDesc.innerHTML = desc;
    descCat.innerHTML = cat;

    descAuth.setAttribute('href', authLink);
    descAuth.setAttribute('target', '_blank');
  });
}

//CLASS SELECTED

for (var i = 0; i < filmItem.length; i++) {
  filmItem[i].addEventListener('click', function() {
    filmItem[i].classList.toggle("selected");
  })
}


//retirer la recherche par rating