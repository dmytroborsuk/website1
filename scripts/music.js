(async () => {
     let genres = await getGenres();

     let container = document.getElementById('container');

     genres.data.forEach(element => {
        const name = element.name;
        const image = element.picture_small;
        const link = 'genre.html?id=' + element.id;

        renderMusicItem(container, image, name, link)
     });
 



})();