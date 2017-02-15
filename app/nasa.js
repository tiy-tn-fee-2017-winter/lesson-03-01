import data from './nasa-data';

console.log(data);

const titleEl = document.querySelector('.nasa-pod__title');
titleEl.innerText = data.title;

titleEl.style.transition = 'color 100ms';

const dateEl = document.querySelector('.nasa-pod__date');
dateEl.innerText = data.date;

const photoEl = document.querySelector('.nasa-pod__pic img');
photoEl.src = data.url;

let rotation = 0;

// Double Rainbow WOW!!!
window.setInterval(() => {
  // Get a random integer number from 0 to 255 (ish)
  const red = parseInt(Math.random() * 255);
  const green = parseInt(Math.random() * 255);
  const blue = parseInt(Math.random() * 255);

  photoEl.style.filter = `hue-rotate(${rotation}deg)`;

  titleEl.style.color = `rgb(${red}, ${green}, ${blue})`;

  rotation += 10;
}, 200);

// jQuery Version of this
// $('.nasa-pod__title').text(data.title);
