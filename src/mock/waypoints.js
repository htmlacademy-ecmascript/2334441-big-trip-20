import { PRICE, FAVORITES} from '../const.js';
import { getRandomInteger,getRandomArrayElement, formatStringToDateTime, getDate } from '../utils.js';


export function createWaypoint(type, desinationId, OfferId){
  return{
    id:crypto.randomUUID(),
    basePrice: getRandomInteger(1, PRICE.MAX),
    dateFrom: formatStringToDateTime(getDate(false)),
    dateTo: formatStringToDateTime(getDate(true)),
    destination: desinationId,
    isFavorite: getRandomArrayElement(FAVORITES),
    offers: OfferId,
    type
  };
}

