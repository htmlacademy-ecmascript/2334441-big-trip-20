import TripPresenter from './presenter/trip-presenter';
import HeaderPresenter from './presenter/header-presenter';
import EventsModel from './model/waypoint-model.js';

const siteTripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const eventsModel = new EventsModel();

const tripPresenter = new TripPresenter({
  tripContainer: tripEventsElement,
  eventsModel,
});
const headerPresenter = new HeaderPresenter({container: siteTripMainElement});

headerPresenter.init();
tripPresenter.init();
