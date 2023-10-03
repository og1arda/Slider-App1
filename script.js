'use strict';

let models = [
  {
    Name: 'Hyundai Kona 1.0 Elite',
    Image: 'imgs/hyundaikona.jpg',
    Link: 'http://www.arabalar.com.tr/hyundai/kona/2023/1-0-elite',
  },
  {
    Name: 'Peugeot 2008',
    Image: 'imgs/peugeot2008.jpg',
    Link: 'http://www.arabalar.com.tr/peugeot/2008/2023/yeni-1-2-allure',
  },
  {
    Name: 'Hyundai i20',
    Image: 'imgs/hyundai20.jpg',
    Link: 'http://www.arabalar.com.tr/hyundai/i20/2023/yeni-1-0-elite-dct',
  },
  {
    Name: 'BMW-3',
    Image: 'imgs/bmw3.jpg',
    Link: 'http://www.arabalar.com.tr/bmw/3-serisi/2023/320i-1-6-m-sport',
  },
  {
    Name: 'Audi A4',
    Image: 'imgs/audi4.jpg',
    Link: 'http://www.arabalar.com.tr/audi/a4/2023/2-0-advanced',
  },
];
let settings = {
  duration: '1000',
  random: true,
};

let index = 0;
let slayCount = models.length;
let interval;

function showSlide(index) {
  document
    .querySelector('.card-img-top')
    .setAttribute('src', models[index].Image);

  document.querySelector('.card-title').textContent = models[index].Name;
  document.querySelector('.card-link').setAttribute('href', models[index].Link);
}

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = slayCount - 1;
  }
  showSlide(index);
});

document
  .querySelector('.fa-arrow-right')
  .addEventListener('click', function () {
    index++;
    if (index > slayCount - 1) {
      index = 0;
    }
    showSlide(index);
  });
document.querySelectorAll('.fa-solid').forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    clearInterval(interval);
  });
});

document.querySelectorAll('.fa-solid').forEach(function (item) {
  item.addEventListener('mouseleave', function () {
    init(settings);
  });
});

function init(settings) {
  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slayCount);
      } while (index == prev);
      prev = index;
    } else {
      if (index + 1 > slayCount) {
        index = 0;
      }
    }
    showSlide(index);
    index++;
  }, settings.duration);
}
