import { MIN_NUMBER, MAX_NUMBER} from '../const.js';
import { getRandomInteger, getDate } from '../utils.js';


export function generateEvents(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    dateFrom: getDate().from,
    dateTo: getDate().to,
    basePrice: getRandomInteger(MIN_NUMBER, MAX_NUMBER),
    offers: offerIds,
    destination: destinationId,
    isFavorite: getRandomInteger(0,1),
    type,
  };
}
