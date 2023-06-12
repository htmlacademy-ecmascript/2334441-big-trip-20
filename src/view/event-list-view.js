import AbstractView from '../framework/view/abstract-view.js';

const createListEvent = () => (
  '<ul class="trip-events__list"></ul>'
);

export default class ListEvent extends AbstractView {
  get template() {
    return createListEvent();
  }
}
