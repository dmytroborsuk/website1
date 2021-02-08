async function getArtists(id) {
    let result;
 
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id + '/artists');
    result = await response.json();
    
    return result;
 }

 async function getGenre(id) {
    let result;
 
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + id );
    result = await response.json();
    
    return result;
 }
 
 async function getGenres() {
    let result;
 
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre');
    result = await response.json();
    
    return result;
 }

 async function getArtist(id) {
   let result;

   let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + id );
   result = await response.json();
   
   return result;
}


async function getAlbums(id) {
   let result;

   let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + id + '/albums');
   result = await response.json();
   
   return result;
}

async function getAlbum(id) {
   let result;

   let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + id);
   result = await response.json();
   
   return result;
}
