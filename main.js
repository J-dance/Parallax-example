const earth = document.getElementById('earth');
const cyclist = document.getElementById('cyclist');
const nightsky = document.getElementById('nightsky');
const mountains = document.getElementById('mountains');
const bluesky = document.getElementById('bluesky');
const palm = document.getElementById('palm');
const poppy = document.getElementById('poppy');
const blade = document.getElementById('blade');
const cat = document.getElementById('cat');
const banana = document.getElementById('banana');
const orange = document.getElementById('orange');
const content = document.getElementById('content');
const moon = document.getElementById('moon');
const line = document.getElementById('line');

window.addEventListener('scroll', () => {
  let { scrollY } = window;

  cyclist.style.top = 60 + (0.3 * scrollY) + '%';

  mountains.style.top = 60 - (0.05 * scrollY) + '%'; 

  bluesky.style.left = 1 * scrollY + '%';

  earth.style.top = 20 + (0.8 * scrollY) + '%';
  earth.style.left = 70 + (-0.2 * scrollY) + '%';

  nightsky.style.top = 0 - (0.1 * scrollY) + '%';

  orange.style.right = -0.1 * scrollY + '%';
  orange.style.transform = `rotate(${scrollY}deg)`;

  banana.style.left = -0.1 * scrollY + '%';

  poppy.style.top = 60 + (0.3 * scrollY) + '%';

  blade.style.top = 60 + (0.3 * scrollY) + '%';

  line.style.width = ((2*scrollY)/document.body.offsetHeight) * (line.parentElement.offsetWidth) - (0.09 * document.body.offsetHeight) + 'px';

  if (scrollY > 180) {
    
  } else {
    moon.style.top = 50 - (0.2 * scrollY) + '%';
    moon.style.left = -5 + (0.2 * scrollY) + '%';
  }

  if (scrollY > 300) {
    cat.style.bottom = '50%';

  } else {
    cat.style.top = 120 - (0.2 * scrollY) + '%';

  }
});

