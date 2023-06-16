import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import { FilterType } from './const';

dayjs.extend(utc);
dayjs.extend(duration);

const DATE_SHORT_FORMAT = 'MMM D';
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
const TIME_FORMAT = 'HH:mm';
const DATE_FULL_FORMAT = 'DD/MM/YY HH:mm';
const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getDate() {
  const minutesGap = getRandomInteger(0, 59);
  const hoursGap = getRandomInteger(0, 23);
  const daysGap = getRandomInteger(0, 5);

  const dateFrom = dayjs().subtract(getRandomInteger(0, 5), 'day').toDate();

  const dateTo = dayjs(dateFrom)
    .add(minutesGap, 'minute')
    .add(hoursGap, 'hour')
    .add(daysGap, 'day')
    .toDate();

  return {
    from: dateFrom,
    to: dateTo
  };
}
function getRefineEventDateTime(date) {
  return date ? dayjs(date).utc().format(DATE_TIME_FORMAT) : '';
}

function getRefineEventDateShort(date) {
  return date ? dayjs(date).utc().format(DATE_SHORT_FORMAT) : '';
}

function getRefineTimeDate(date) {
  return date ? dayjs(date).utc().format(TIME_FORMAT) : '';
}

function getRefineFullDate(date) {
  return date ? dayjs(date).utc().format(DATE_FULL_FORMAT) : '';
}

function getTimeDifference(dateFrom, dateTo) {
  const timeDifference = dayjs(dateTo).diff(dayjs(dateFrom));
  let durationPoint = 0;
  switch (true) {
    case (timeDifference >= MSEC_IN_DAY):
      durationPoint = dayjs.duration(timeDifference).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDifference >= MSEC_IN_HOUR):
      durationPoint = dayjs.duration(timeDifference).format('HH[H] mm[M]');
      break;
    case (timeDifference < MSEC_IN_HOUR):
      durationPoint = dayjs.duration(timeDifference).format('mm[M]');
      break;
  }
  return durationPoint;
}


function isEventFuture(dataFrom) {
  return dayjs(dataFrom).isAfter(dayjs());
}

function isEventPresent(dataFrom) {
  return dayjs(dataFrom).isSame((dayjs()));
}

function isEventPast(dataTo) {
  return dayjs(dataTo).isBefore((dayjs()));
}

const filter = {
  [FilterType.EVERYTHING]: (events) => events.filter((event) => event),
  [FilterType.FUTURE]: (events) => events.filter((event) => isEventFuture(event.dateFrom)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isEventPresent(event.dateFrom)),
  [FilterType.PAST]: (events) => events.filter((event) => isEventPast(event.dateTo)),
};


export {
  getRandomArrayElement,
  getRandomInteger,
  getRefineEventDateShort,
  getRefineTimeDate,
  getTimeDifference,
  getRefineFullDate,
  getRefineEventDateTime,
  getDate,
  isEventFuture,
  isEventPresent,
  isEventPast,
  filter
};
