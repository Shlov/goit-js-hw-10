
export function fetchCountries(name) {
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  return fetch(URL)
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


