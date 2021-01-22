(async () => {
    async function getGenres() {
        let result;
     
        let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre');
        result = await response.json();
        
        return result;
     }
     
     let genres = await getGenres();
     

     console.log('Deezer Result: ', genres.data);   

    

     let container = document.getElementById('container');

     genres.data.forEach((element, key) => {
        let figure = document.createElement('figure');
        figure.className = 'figure';
        let caption = document.createElement('figcaption');
        caption.className = 'figure-caption';
        caption.innerText = element.name;
     
        let image = document.createElement('img');
        image.src = element.picture;
        image.className = 'img-thumbnail m-2';
        figure.appendChild(image);
        figure.appendChild(caption);

        container.appendChild(figure);
     });

    
   

     


})();