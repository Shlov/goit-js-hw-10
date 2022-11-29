import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import fetchCountries from './js/fetchCountries';

Notify.init({
  cssAnimationDuration: 600,
  timeout: 6000,
  width: '430px',
  failure: {
    background: '#f56d32',
  },
});

const DEBOUNCE_DELAY = 300;

const refs = {
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

function fetchCountries(name) {
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  fetch(URL)
  .then(response => {
    console.log(fetch)
    if (!response.ok) {
      refs.listEl.innerHTML = '';
      throw new Error(response.status, Notify.failure('Oops, there is no country with that name.'));
    }
    // console.log('1-then',response.json())
    return response.json();
  })
  .then(
    data => {
    console.log(!Boolean(data.length-1))
    if (!(data.length-1)) {
      markupCountr(data);
    } else if (data.length <= 10) {
      markupCountrys(data)
    } else {
      Notify.info('Too many matches found. Please enter a more specific name.');
      console.log('>10');
      refs.listEl.innerHTML = '';
    }
  });
}

function markupCountr(country) {
  const markup = country.map(country => 
    `<li class="countrys-item">
    <img class="item-flag" src="${country.flags.svg}" alt="flag" width="100" >
    <h2 class="item-country">${country.name}</h2>
    <p class="item-capital"><span class="item-span">Capital: </span>${country.capital}</p>
    <p class="item-population"><span class="item-span">Population: </span>${country.population}</p>
    <p class="item-languages"><span class="item-span">Languages: </span>${country.languages.map(ln => ln.name).join('/')}</p>
  </li>`
  ).join('');
  console.log(markup)
  refs.listEl.innerHTML = markup;
}

function markupCountrys(countrys) {
  const markup = countrys.map(country => 
    `<li class="country-item">
    <img class="item-flag" src="${country.flags.svg}" alt="flag" width="40" >
    <h2 class="item-country">${country.name}</h2>
  </li>`
  ).join('');
  refs.listEl.innerHTML = markup;
}



