import {render, RenderPosition} from './render.js';
import InfoView from './view/info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventPresenter from './presenter/event-presenter.js';
import CreateWaypointList from './module/waypoints-generator.js';
import WaypointModel from './model/model/waypoint-model.js';
import OfferModel from './model/model/offer-model.js';
import DestinationsModel from './model/model/destination-model.js';

const mockService = new CreateWaypointList();
const pointsModel = new WaypointModel(mockService);
const offersModel = new OfferModel(mockService);
const destinationsModel = new DestinationsModel(mockService);


const eventPresenter = new EventPresenter({
  listContainer: document.querySelector('.trip-events'),
  pointsModel: pointsModel,
  offersModel: offersModel,
  destinationsModel: destinationsModel
});

render(new InfoView(), document.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
render (new FilterView(), document.querySelector('.trip-main'));
render(new SortView(),document.querySelector('.trip-events'));

eventPresenter.init();
