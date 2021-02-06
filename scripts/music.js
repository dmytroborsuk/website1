(async () => {
     let genres = await getGenres();

     let container = document.getElementById('container');

     genres.data.forEach(element => {
        renderMusicItem(element, container);
     });

    
   

     


})();