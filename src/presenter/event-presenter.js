/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import { render, replace } from '../framework/render.js';
import ListEvent from '../view/event-list-view.js';
import EventsItemView from '../view/events-item-view.js';
import FormItemEvent from '../view/form-item-event.js';

const point = {
  dateTo: '1',
  dateFrom: '123',
  type: 'taxi'
};

const pointDestination = {
  name:'Kirov'
};

const pointOffers = {
  offers:[{
    title: 'usluga123',
    price: 123
  },
  {
    title: 'usluga 555',
    price: 555
  }]
};
export default class EventPresenter {
  eventComponent = new ListEvent();

  constructor({listContainer, pointsModel, offersModel, destinationsModel}){
    this.listContainer = listContainer;
    this.point = pointsModel;
    this.offer = offersModel;
    this.destination = destinationsModel;
    this.points = pointsModel.get();
  }

  #renderPoint = () => {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replacePointToEdit();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new EventsItemView({
      data: {
        point,
        pointDestination,
        pointOffers
      },
      // eslint-disable-next-line arrow-body-style
      onEditClick: () => {
        replacePointToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    render(pointComponent,this.eventComponent.element);

    const pointEditComponent = new FormItemEvent({
      point,
      pointDestination : this.destination.get(),
      pointOffers: this.offer.get(),
      onFormSubmit: () => {
        replaceEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToEdit() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    pointComponent.setEditHandler(()=>replacePointToEdit());
    pointEditComponent.setEditHandler(()=>replaceEditToPoint());
    render(pointComponent,this.eventComponent.element);
  };

  /*#renderEditPoint = (point) => {
    const pointEditComponent = new FormItemEvent({
      point,
      pointDestination : this.destination.get(),
      pointOffers: this.offer.get()
    });
    render(pointEditComponent,this.eventComponent.element);
  };*/

  init(){
    render(this.eventComponent,this.listContainer);
    this.points.forEach(()=> {
      //this.#renderEditPoint(point);
      this.#renderPoint(point);
    });

  }
}
