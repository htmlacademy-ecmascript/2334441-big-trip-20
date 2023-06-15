import { MIN_NUMBER, MAX_NUMBER} from '../const.js';
import { getRandomInteger } from '../utils.js';


export function generateWaypoints(type, destinationId, offerIds) {
  return {
    id: crypto.randomUUID(),
    dateFrom: new Date(2023, 4, 18, 10, 20),
    dateTo: new Date(2023,4, 18, 20, 0),
    basePrice: getRandomInteger(MIN_NUMBER, MAX_NUMBER),
    offers: offerIds,
    destination: destinationId,
    isFavorite: getRandomInteger(0,1),
    type,
  };
}
