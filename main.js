//menu-hamburguer
const html = document.querySelector('html');
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

html.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('active');
    menuBtn.checked = false;
  }
});

//play
const video = document.getElementById('video');
const overlay = document.getElementById('overlay');
const play = document.getElementById('botao-play');

play.addEventListener('click', function() {
  video.play();
  overlay.style.opacity = 0;
  play.style.display = 'none';
});


//overlay bg
const containerVideo = document.querySelector('.container__video');
const videoQuadrado = containerVideo.querySelector('.overlay');
const quadradoAmarelo = containerVideo.querySelector('.quadrado-amarelo');

function updateQuadradoPosition() {
  const videoRect = videoQuadrado.getBoundingClientRect();
  const containerRect = containerVideo.getBoundingClientRect();

  let left = ((videoRect.left - containerRect.left) / containerRect.width) * 100 - 2;
  let top = ((videoRect.top - containerRect.top) / containerRect.height) * 100 + 38;

  if (window.innerWidth < 992) {
    top = ((videoRect.top - containerRect.top) / containerRect.height) * 100 + 26;
  }
  

  quadradoAmarelo.style.left = `${left}%`;
  quadradoAmarelo.style.top = `${top}%`;
}


updateQuadradoPosition();

window.addEventListener('resize', updateQuadradoPosition);



//contador
var counter1 = document.getElementById('contador1');
var counter2 = document.getElementById('contador2');
var counter2 = document.getElementById('contador3');

function increment(i, max, element){
  if(i > max) return;
  setTimeout(function(){
    element.innerText = '+' + Math.round(i);
    increment(i+(max/100), max, element);
  },10)
}
const minhaSecao = document.querySelector('#info');
const observer = new IntersectionObserver(function(entries, observer) {

  if (entries[0].isIntersecting) {

    increment(0,34793, contador1 );
    increment(0,45382, contador2 );
    increment(0,54762, contador3 );
    observer.unobserve(entries[0].target);
    console.log('Seção exposta!');
  }
  }, { threshold: 0.5 });


observer.observe(minhaSecao);


//carrossel
const carrossel = document.querySelector('.carrossel');
const carrosselBotao = document.querySelector('.container__posts');
const btnNext = carrosselBotao.querySelector('.next');
const btnPrev = carrosselBotao.querySelector('.prev');
const postsContainer = carrossel.querySelector('.posts__conteudos');
const posts = postsContainer.querySelectorAll('.posts__conteudo');
const postsWidth = posts[0].clientWidth;

let currentIndex = 0;

btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % posts.length;
  const maxTranslateX = (postsContainer.clientWidth + (postsWidth * 1.4));
  const translateX = Math.min(currentIndex * (postsWidth * 1.5), maxTranslateX);
  postsContainer.style.transform = `translateX(-${translateX}px)`;
});

btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + posts.length) % posts.length;
  const maxTranslateX = (postsContainer.clientWidth - (postsWidth * 1.05));
  const translateX = Math.max(currentIndex * (postsWidth * 1.05), 0);
  postsContainer.style.transform = `translateX(-${translateX}px)`;
});
