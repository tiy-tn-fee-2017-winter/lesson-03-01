import 'whatwg-fetch';

import './nasa';
import './planet-express';

import calculate from './calculate';
import average from './average';

// This is browser code to hook up our calculator to the DOM
const operation = document.querySelector('[name=c-operation]');
const value1 = document.querySelector('[name=c-value1]');
const value2 = document.querySelector('[name=c-value2]');
const calculationSubmit = document.querySelector('.calculator__submit');
const calculationResult = document.querySelector('.calculator__result');

calculationSubmit.addEventListener('click', () => {
  const result = calculate(operation.value, parseFloat(value1.value), parseFloat(value2.value));

  calculationResult.innerText = result || 'NaN';
});

// This is browser code to hook up the average to the DOM
const avgAdd = document.querySelector('.average__add');
const avgList = document.querySelector('.average__list');
const avgSubmit = document.querySelector('.average__submit');
const avgResult = document.querySelector('.average__result');

avgAdd.addEventListener('click', () => {
  const item = document.createElement('li');
  item.classList.add('average-item');
  item.innerHTML = '<input type="text" class="average-item__input">';
  avgList.appendChild(item);
});

avgSubmit.addEventListener('click', () => {
  const inputs = avgList.querySelectorAll('.average-item__input');
  const values = Array.from(inputs).map(i => parseFloat(i.value));

  const result = average(values);

  avgResult.innerText = result;
});
