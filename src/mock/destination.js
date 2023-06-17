import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { CITIES, MIN_COUNT_DESCRIPTION, MAX_COUNT_DESCRIPTION, DESCRIPTIONS, MAX_NUMBER, MIN_NUMBER } from '../const.js';

export function getRandomMockDestination() {
  const city = getRandomArrayElement(CITIES);
  return {
    id: crypto.randomUUID(),
    name: city,
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: Array.from({length: getRandomInteger(MIN_COUNT_DESCRIPTION, MAX_COUNT_DESCRIPTION)}, () => ({
      src: `https://loremflickr.com/248/152?random=${getRandomInteger(MIN_NUMBER, MAX_NUMBER)}`,
      description: `This is description ${city}`,
    }))
  };
}
