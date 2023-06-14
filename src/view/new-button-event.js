import AbstractView from '../framework/view/abstract-view.js';

function createNewTaskButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled>+ ADD NEW EVENT</button>';
}

export default class NewButtonEvent extends AbstractView {

  get template() {
    return createNewTaskButtonTemplate();
  }
}
