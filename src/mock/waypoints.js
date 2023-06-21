import { MIN_NUMBER, MAX_NUMBER} from '../const.js';
import { getRandomInteger, getDate } from '../utils.js';
import { nanoid } from 'nanoid';

export function generateEvents(type, destinationId, offerIds) {
  return {
    id: nanoid(),
    dateFrom: getDate().from,
    dateTo: getDate().to,
    basePrice: getRandomInteger(MIN_NUMBER, MAX_NUMBER),
    offers: offerIds,
    destination: destinationId,
    isFavorite: getRandomInteger(0,1),
    type,
  };
}
