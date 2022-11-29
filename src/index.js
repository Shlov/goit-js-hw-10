import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';

Notify.init({
  cssAnimationDuration: 400,
  timeout: 2000,
  width: '430px',
  failure: {
    background: '#f56d32',
  },
});

const DEBOUNCE_DELAY = 300;

export const refs = {
  inputEl: document.querySelector('#search-box'),
  listEl: document.querySelector('.country-list'),
  infoEl: document.querySelector('.country-info'),
}

refs.inputEl.addEventListener('input', debounce(foo, DEBOUNCE_DELAY));

function foo(event) {
  const name = event.target.value.trim();
  if (!name.length) {
    refs.listEl.innerHTML = '';
    return
  }
  fetchCountries(name);
}

export function markupCountry(country) {
  const markup = country.map(country => 
    `<li class="countrys-item">
    <img class="item-flag" src="${country.flags.svg}" alt="flag" width="100" >
    <h2 class="item-country">${country.name}</h2>
    <p class="item-capital"><span class="item-span">Capital: </span>${country.capital}</p>
    <p class="item-population"><span class="item-span">Population: </span>${country.population}</p>
    <p class="item-languages"><span class="item-span">Languages: </span>${country.languages.map(ln => ln.name).join('/')}</p>
  </li>`
  ).join('');
  refs.listEl.innerHTML = markup;
}

export function markupCountrys(countrys) {
  const markup = countrys.map(country => 
    `<li class="country-item">
    <img class="item-flag" src="${country.flags.svg}" alt="flag" width="40" >
    <h2 class="item-country">${country.name}</h2>
  </li>`
  ).join('');
  refs.listEl.innerHTML = markup;
}



