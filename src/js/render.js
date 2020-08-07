import countriesList from '../templates/countriesList.hbs';
import countryInform from '../templates/countryInform.hbs';
import error from '../templates/error.hbs';

const searchResult = document.querySelector('.js-list');
function renderSearchResult(countries) {
  if (countries.length > 10) {
    searchResult.insertAdjacentHTML('beforeend', error());
  } else if (countries.length < 10) {
    if (countries.length > 1) {
      searchResult.insertAdjacentHTML('beforeend', countriesList(countries));
    } else {
      searchResult.insertAdjacentHTML('beforeend', countryInform(countries));
    }
  }
}
export default renderSearchResult;
