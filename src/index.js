import './styles.css';
import lodash from 'lodash';
import fetchCountries from './js/fetchCountries';
import renderSearchResult from './js/render';

const searchForm = document.querySelector('input');
const searchResult = document.querySelector('.js-list');
searchForm.addEventListener(
  'input',
  lodash.debounce(() => {
    if (searchForm.value.length > 0) {
      fetchCountries(searchForm.value).then(renderSearchResult);
    } else searchResult.innerHTML = ' ';
    return;
  }, 500),
);
