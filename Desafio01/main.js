const image = document.getElementById('coracao');
const image2 = document.getElementById('coracaoDois');


console.log(coracaoDois)

function curtida(){
    image.src = './img/heart-fill.svg'
}

image.addEventListener('click', curtida);
image2.addEventListener('click', curtida);
