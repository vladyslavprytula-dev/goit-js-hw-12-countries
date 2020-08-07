import notFound from '../templates/notFound.hbs';
const searchResult = document.querySelector('.js-list');

function fetchCountries(input) {
  searchResult.innerHTML = ' ';
  return fetch(`https://restcountries.eu/rest/v2/name/${input}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        searchResult.innerHTML = notFound();
      }
    },
  );
}

export default fetchCountries;
