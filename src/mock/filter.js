import {filter} from '../utils';

export function generateFilter(events) {
  return Object.entries(filter).map(
    ([filterType, filterEvents]) => ({
      type: filterType,
      count: filterEvents(events).length,
    })
  );
}
