(async function() {
     let urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get('id');

     const genre = await getGenre(id); 
     const title = document.querySelector('h1');
     title.innerText = genre.name;   

     const genreImg = document.getElementById('genre-img');
     genreImg.src = genre.picture_xl;

     const artists = await getArtists(id);

     console.log(artists);

     artists.data.forEach(element => {
        const name = element.name;
        const image =  element.picture_small;
        const link = 'artist.html?id=' + element.id;

        renderMusicItem(container, image, name, link);
     });
     

})();