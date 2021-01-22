
let button1 = document.querySelector('#button1');
button1.addEventListener('click', () => { alert('Hello!') });
button1.addEventListener('mouseover', () => { console.log('focus') });

let button2 = document.querySelector('#button2');
button2.addEventListener('click', () => { console.log('button 2 clicked!') } );
button2.addEventListener('mousedown', () => { console.log('mousedown button2') } );
button2.addEventListener('mouseup', () => { console.log('mouseup button2') } );

let button3 = document.querySelector('#button3');
button3.addEventListener('click', () => { 
    console.log('button 3 clik');
});

 










