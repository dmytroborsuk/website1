(async function() {
    let urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const album = await getAlbum(id); 
    const title = document.getElementById('title');
    title.innerText = album.title;   

    const albumImg = document.getElementById('genre-img');
    albumImg.src = album.cover_medium;

    

    console.log(album);

    const listBlock = document.querySelector('.list-group');
    album.tracks.data.forEach(element => {
        const track = document.createElement('li');
        track.className = 'list-group-item';
        track.innerText = element.title_short;
        listBlock.appendChild(track);

    });


    

})();