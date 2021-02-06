function renderFigure() {
    let figure = document.createElement('figure');
    figure.className = 'figure';

    return figure;
}

function renderCaption(element) {
    let caption = document.createElement('figcaption');
    caption.className = 'figure-caption';
    caption.innerText = element.name;

    return caption;
}

function renderLink(element) {
    let link = document.createElement('a');
    link.href = 'genre.html?id=' + element.id;
    return link;
}

function renderImage(element) {
    let image = document.createElement('img');
    image.src = element.picture;
    image.className = 'img-thumbnail m-2';

    return image;
}

function renderMusicItem(element, container) {
    let figure = renderFigure();
    let caption = renderCaption(element);
    let image = renderImage(element);
    let link = renderLink(element);

    figure.appendChild(image);
    figure.appendChild(caption); 
    link.appendChild(figure) 
        
    container.appendChild(link);
}