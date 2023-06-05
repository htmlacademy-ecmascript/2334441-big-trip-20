import {DESCRIPTIONS, CITIES} from '../const.js';
import {getRandomArrayElement} from '../utils.js';

export function createDestination() {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    name:city,
    description:DESCRIPTIONS,
    pictures: [
      {
        src:`https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        desription: getRandomArrayElement(DESCRIPTIONS)
      }
    ]
  };

}
