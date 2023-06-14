import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(utc);
dayjs.extend(duration);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// eslint-disable-next-line no-shadow
function formatStringToDateTime(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

// eslint-disable-next-line no-shadow
function formatStringToShortDate(date) {
  return dayjs(date).format('MMM DD');
}

// eslint-disable-next-line no-shadow
function formatStringShorTime(date){
  return dayjs(date).format('HH:mm');
}
function callcDate(dateFrom,dateTo){
  const from = dayjs(dateFrom);
  const to = dayjs(dateTo);
  const diff = to.diff(from,'hours', true);
  dayjs.duration(diff, 'hours');
  return dayjs.duration().format('HH:mm');
}

let date = dayjs().subtract(getRandomInteger(0, 4), 'day').toDate();

function getDate(dateValue) {
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

function differenceTime(timeFrom, timeTo){
  const xFrom = dayjs(timeFrom);
  const xTo = dayjs(timeTo);
  const dif = dayjs.duration(xTo.diff(xFrom)).$d;
  return (
    `${dif.days ? `${dif.days }D ` : ''}` +
    `${dif.hours ? `${dif.hours }H ` : ''}` +
    `${dif.minutes ? `${dif.minutes }M` : ''}`
  );
}

const humanizeDate = (anyDate, dateFormat) => anyDate ? dayjs(anyDate).format(dateFormat) : '';

const countDates = (dateFrom, dateTo) =>{
  const daysDiff = dayjs(dateTo).diff(dayjs(dateFrom), 'day', true);
  const days = Math.floor(daysDiff);
  const hoursDiff = dayjs(dateTo).diff(dayjs(dateFrom), 'hour', true);
  const hoursAll = Math.floor(hoursDiff);
  const hours = Math.floor((daysDiff - days) * 24);
  const minutes = Math.floor((hoursDiff - hoursAll) * 60);
  if (days === 0 && hours === 0) {
    return `${minutes}M`;
  }
  if (days === 0) {
    return `${hours}H ${minutes}M`;
  }

  return `${days}D ${hours}H ${minutes}M`;
};

export {getDate, callcDate, humanizeDate, countDates, formatStringShorTime, formatStringToShortDate, formatStringToDateTime, getRandomArrayElement, getRandomInteger, differenceTime };
