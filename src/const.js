const WAYPOINTS = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant',
];

const CITIES = [
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Kiyv',
  'Aberdin',
  'Alabama',
  'Frankfurt',
  'Moscow',
  'Paris'
];

const OFFERS = [
  'Add luggage',
  'Switch to comfort',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city',
  'Order Uber',
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const MIN_NUMBER = 10;
const MAX_NUMBER = 1000;
const MIN_COUNT_OFFER = 0;
const MAX_COUNT_OFFER = 5;
const MIN_COUNT_DESCRIPTION = 1;
const MAX_COUNT_DESCRIPTION = 5;

const EVENT_EMPTY = {
  type: 'taxi',
  dateFrom: null,
  dateTo: null,
  basePrice: 0,
  offers: [],
  destination: null,
  isFavorite: false
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  PRICE: 'price',
  TIME: 'time',
};

export {WAYPOINTS, CITIES, MAX_NUMBER, MIN_NUMBER, OFFERS,
  DESCRIPTIONS, FilterType, MAX_COUNT_DESCRIPTION, MIN_COUNT_DESCRIPTION,
  MIN_COUNT_OFFER, MAX_COUNT_OFFER, EVENT_EMPTY, SortType};
