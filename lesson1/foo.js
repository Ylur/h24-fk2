console.log('foobar');

const element = document.getElementById('container');
const paragraph = document.createElement('p');

paragraph.textContent = 'This element was created in foo.js';
element.appendChild(paragraph);

const counter = 1;
const onPress = () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'this element was created by pressing button';
    element.appendChild(newParagraph);
    console.log('pressing button');
}

const button = document.getElementById('button');
button.addEventListener('click', onPress);
