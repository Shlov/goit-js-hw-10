
export function fetchCountries(name) {
  const URL = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  return fetch(URL)
}
