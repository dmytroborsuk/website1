function renderFigure() {
    let figure = document.createElement('figure');
    figure.className = 'figure';

    return figure;
}

function renderCaption(title) {
    let caption = document.createElement('figcaption');
    caption.className = 'figure-caption';
    caption.innerText = title;

    return caption;
}

function renderLink(linkParam) {
    let link = document.createElement('a');
    link.href = linkParam;
    return link;
}

function renderImage(imageLink) {
    let image = document.createElement('img');
    image.src = imageLink;
    image.className = 'img-thumbnail m-2';

    return image;
}

function renderMusicItem(container, imageParam, nameParam, linkParam) {
    let figure = renderFigure();
    let caption = renderCaption(nameParam);
    let image = renderImage(imageParam);
    let link = renderLink(linkParam);

    figure.appendChild(image);
    figure.appendChild(caption); 
    link.appendChild(figure) 
        
    container.appendChild(link);
}