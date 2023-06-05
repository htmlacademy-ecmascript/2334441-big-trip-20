import { getRandomInteger } from '../utils.js';
import { PRICE } from '../const.js';

export function createOffer(type) {
  return {
    id:crypto.randomUUID(),
    title: `Offer ${type}`,
    price: getRandomInteger(PRICE.MIN, PRICE.MAX)
  };
}
