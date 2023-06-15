import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { CITIES, MIN_COUNT_DESCRIPTION, MAX_COUNT_DESCRIPTION, DESCRIPTIONS } from '../const.js';

export function getRandomMockDestination() {
  const city = getRandomArrayElement(CITIES);
  return {
    id: crypto.randomUUID(),
    name: city,
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: Array.from({length: getRandomInteger(MIN_COUNT_DESCRIPTION, MAX_COUNT_DESCRIPTION)}, () => ({
      src: 123,
      description: `This is description ${city}`,
    }))
  };
}
