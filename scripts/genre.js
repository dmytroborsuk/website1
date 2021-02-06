(async function() {
     let urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get('id');

     const genre = getGenre(id); 
     const artists = await getArtists(id);

     artists.data.forEach(element => {
         renderMusicItem(element, container);
     });
     

})();