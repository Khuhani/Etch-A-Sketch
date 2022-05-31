const container = document.querySelector('.container');
const size = document.querySelector('.size').value;
const color = document.querySelector('.color');

function populate(size){
    container.style.setProperty('--size',size);
    for(let i=0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', function (){
            div.style.backgroundColor = color.value});
        
        container.appendChild(div);
    }
}

populate(size);