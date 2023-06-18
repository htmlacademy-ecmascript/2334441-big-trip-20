import { MIN_NUMBER, MAX_NUMBER} from '../const.js';
import { getRandomInteger } from '../utils.js';

//надо придумать что-то с датой чтобы не было отрицалова

function getRandomDate(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
  return new Date(randomTimestamp);
}

export function generateEvents(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    dateFrom: getRandomDate(new Date('2023-06-01'), new Date('2023-06-30')),
    dateTo: getRandomDate(new Date('2023-06-01'), new Date('2023-06-30')),
    basePrice: getRandomInteger(MIN_NUMBER, MAX_NUMBER),
    offers: offerIds,
    destination: destinationId,
    isFavorite: getRandomInteger(0,1),
    type,
  };
}
