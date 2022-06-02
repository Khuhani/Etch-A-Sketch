const container = document.querySelector('.container');
const sizeChange = document.querySelector('.size');
let size = sizeChange.value;
const color = document.querySelector('.color');
const clear = document.querySelector('.btn');
//const erase = document.querySelector('.erase');

function populate(size){
    container.style.setProperty('--size',size);
    for(let i=0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', () => { 
            if(!draw)return 
            div.style.backgroundColor = color.value});
        div.addEventListener('mousedown',() =>{
            div.style.backgroundColor = color.value
        })
        container.appendChild(div);
    }
}

container.addEventListener('mousedown',() => draw=true)
container.addEventListener('mouseup',() => draw=false)

populate(size);

function reset(){
    container.innerHTML='';
    populate(size);
}

clear.addEventListener('click',reset);

sizeChange.addEventListener('keyup', () => {size = sizeChange.value;reset();});

//erase.addEventListener('mousedown',() => {div.style.backgroundColor = 'white';});