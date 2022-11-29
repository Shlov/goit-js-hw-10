import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {markupCountry, markupCountrys, refs} from '../index'


export default function fetchCountries(name) {
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  fetch(URL)
  .then(response => {
    if (!response.ok) {
      refs.listEl.innerHTML = '';
      throw new Error(response.status, Notify.failure('Oops, there is no country with that name.'));
    }
    return response.json();
  })
  .then(
    data => {
    if (!(data.length-1)) {
      markupCountry(data);
    } else if (data.length <= 10) {
      markupCountrys(data)
    } else {
      Notify.info('Too many matches found. Please enter a more specific name.');
      console.log('>10');
      refs.listEl.innerHTML = '';
    }
  });
}



















// export default function fetchCountries(name) {
//   const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
//   fetch(URL).then(response => {
//     if (!response.ok) {
//       // throw new Error(response.status, Notify.failure('❌ Цього ми не знайшли. Спробуй ще.'));
//       throw new Error(response.status, Notify.failure('Oops, there is no country with that name.'));
//     }
//     console.log('1-then',response.json())
//     // return response.json();
//   }
//   )
// }

// export function fetchCountries() {
//   const URL_BASE = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages'
//   fetch(URL_BASE).then(response => {
//     if(!response.ok) {
//       throw new Error(response.status);
//     }
//     console.dir(response);
//     return response.json()
//   }).then(data => console.log(data));
// }


// export default function fetchCountries(name) {
//   const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
//   fetch(URL).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status, Notify.failure('❌ Цього ми не знайшли. Спробуй ще.'));
//     }
//     return response.json();
//   }
//   ).then(data => {return data});
// }


