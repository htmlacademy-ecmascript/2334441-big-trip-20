import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { OFFERS, MIN_NUMBER , MAX_NUMBER} from '../const.js';

export function generateMockOffers() {
  return {
    id: crypto.randomUUID(),
    title: getRandomArrayElement(OFFERS),
    price: getRandomInteger(MIN_NUMBER, MAX_NUMBER / 10),
  };
}

