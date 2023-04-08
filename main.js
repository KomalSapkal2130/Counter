const prevEl = document.querySelector('.dec');
const nextEl  = document.querySelector('.inc')
const resetEl = document.querySelector('.reset');
const count = document.querySelector('.count');

let counter = 0;

prevEl.addEventListener('click',decrease);
nextEl.addEventListener('click',increase);
resetEl.addEventListener('click',reset);

function decrease(){
    counter--;
    count.innerHTML = counter;
    if(counter<0){
        count.style.color = "red";
    }
    if(counter==0){
        count.style.color = "black";
    }

}

function increase(){
    counter++;
    count.innerHTML = counter;
    if(counter>0){
        count.style.color = "green";
    }
    if(counter==0){
        count.style.color = "black";
    }

}

function reset(){
    counter=0;
    count.innerHTML = counter;
    count.style.color = "black";

}