//FILTRER
for (var i = 0; i < btnGenre.length; i++) {
  btnGenre[i].addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].category !== this.dataset.genre) {
        lis[i].style.display = 'none';
      } else {
        lis[i].style.display = '';
      }
    }
  })
}

all.addEventListener('click', function() {
  for (var i = 0; i < data.films.length; i++) {
    if (data.films.category === this.dataset.gentre) {
      lis[i].style.display = 'block';
    }
  }
})