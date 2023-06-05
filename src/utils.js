import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(utc);
dayjs.extend(duration);

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// eslint-disable-next-line no-shadow
export function formatStringToDateTime(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

// eslint-disable-next-line no-shadow
export function formatStringToShortDate(date) {
  return dayjs(date).format('MMM DD');
}

// eslint-disable-next-line no-shadow
export function formatStringShorTime(date){
  return dayjs(date).format('HH:mm');
}
export function callcDate(dateFrom,dateTo){
  const from = dayjs(dateFrom);
  const to = dayjs(dateTo);
  const diff = to.diff(from,'hours', true);
  dayjs.duration(diff, 'hours');
  return dayjs.duration().format('HH:mm');
}

let date = dayjs().subtract(getRandomInteger(0, 4), 'day').toDate();

export function getDate(dateValue) {
  const minsGap = getRandomInteger(0, 59);
  const hoursGap = getRandomInteger(1, 23);
  const daysGap = getRandomInteger(0, 4);

  if (dateValue) {
    date = dayjs(date)
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .add(daysGap, 'day')
      .toDate();
  }
  return date;
}
