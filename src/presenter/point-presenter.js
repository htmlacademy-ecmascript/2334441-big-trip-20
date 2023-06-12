import { render } from '../framework/render.js';
import FormItemEvent from '../view/form-item-event.js';
import EventsItemView from '../view/events-item-view.js';

export default class PointPresentor{
  #listContainer;
  #point;
  #offer;
  #destination;
  #points;
  constructor({listContainer, pointsModel, offersModel, destinationsModel}){
    this.#listContainer = listContainer;
    this.#point = pointsModel;
    this.#offer = offersModel;
    this.#destination = destinationsModel;

    this.#points = pointsModel.get();
  }

  initRender(container){
    render(new FormItemEvent(), this.eventComponent.element);

    this.points.forEach((point) => {
      render(
        new EventsItemView({
          point,
          pointDestination : this.destination.getById(point.destination),
          pointOffers: this.offer.getByType(point.type)
        }),
        container);
    });
  }
}
