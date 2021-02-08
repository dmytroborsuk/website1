(async function() {
    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const artist = await getArtist(id); 
    const title = document.getElementById('title');
    title.innerText = artist.name;   

    const artistImg = document.getElementById('genre-img');
    artistImg.src = artist.picture_xl;

    const albums = await getAlbums(id);

    console.log(artist);
    console.log(albums);

    albums.data.forEach(element => {
        const link = 'album.html?id=' + element.id;
        const name = element.title;
        const image = element.cover_small;

        renderMusicItem(container, image, name, link);
    });
    

})();