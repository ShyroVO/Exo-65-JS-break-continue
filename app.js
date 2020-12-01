let elements = document.getElementsByClassName('paragraphe');

for(let i = 0; i < elements.length; i++ ) {

    if (i % 2 === 0) {
        continue;
    }

    let element = elements[i];
    element.innerHTML = i+1;

    if (i === 4) {
        break;
    }

}