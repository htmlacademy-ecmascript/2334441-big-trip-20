/* eslint-disable no-console */
import AbstractView from '../framework/view/abstract-view';


function createFilterItemTemplate(filters, isChecked) {
  return filters.map(({ type, count }) => `
  <div class="trip-filters__filter">
    <input id="filter-${type}"
    class="trip-filters__filter-input visually-hidden"
    type="radio" name="trip-filter" value="${type}"
    ${isChecked ? 'checked' : ''}
    ${count === 0 ? 'disabled' : ''}">
    <label class="trip-filters__filter-label" for="filter-${type}">${type} ${count}</label>
  </div>`).join('');
}


function createFilterTemplate(filters) {
  const filtersList = createFilterItemTemplate(filters);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersList}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class FilterView extends AbstractView {
  #filters = null;

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}