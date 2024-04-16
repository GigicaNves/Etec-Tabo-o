function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = timeString;
}
  
  setInterval(updateTime, 1000);
  
  updateTime();

function descobrir() {
  var fraseElemento = document.getElementById("mudar"); 
  var frase = fraseElemento.textContent; 
  frase = frase.replace("Nossos cursos", "Nossas oportunidades para você");
  fraseElemento.textContent = frase;
}

//Slideshow

var slide = document.querySelector(".slideshow");
var imagens = [
  './assets/etec_taboao.png',
  './assets/etec-taboao-drone.jpg',
  './assets/etectaboaodaserra.jpg'
];

var time = 2000
var count = 0

function moveSlideShow() {
  slide.src = imagens[count]

  if (count < imagens.length - 1) {
    count++
  } else {
    count = 0
  }

  setTimeout("moveSlideShow()", time)
}

window.onload = moveSlideShow
