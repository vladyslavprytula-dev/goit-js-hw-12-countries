import './styles.css';
import lodash from 'lodash';
import fetchCountries from './js/fetchCountries';
import renderSearchResult from './js/render';

const searchForm = document.querySelector('input');

searchForm.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(searchForm.value).then(renderSearchResult);
  }, 500),
);
