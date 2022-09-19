// (int) The current year
export const THIS_YEAR = +new Date().getFullYear();

// (int) The current month starting from 1 - 12
// 1 => January, 12 => December
export const THIS_MONTH = +new Date().getMonth() + 1;

// Week days names and shortnames
export const WEEK_DAYS = {
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
  Sunday: "Sun",
};

// Calendar months names and short names
export const CALENDAR_MONTHS = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

// Weeks displayed on calendar
export const CALENDAR_WEEKS = 6;

// Pads a string value with leading zeroes(0) until length is reached
// For example: zeroPad(5, 2) => "05"
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, "0");
};

// (int) Number days in a month for a given year from 28 - 31
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11];
  const leapYear = year % 4 === 0;
  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
    ? 30
    : 31;
};

export const getToday = () => {
  return +new Date().getDate();
};

export const daysArray = () => {
  let days = [];
  let today = getToday();
  let day = new Date().getDay();
  for (let i = 1; i <= 7; i++) {
    if (i < day) {
      days.push(today - (day - i));
    } else if (i > day) {
      days.push(today + (i - day));
    } else {
      days.push(today);
    }
  }
  return days;
};

export const formatDate = () => {
  let daysOfTheWeek = Object.values(WEEK_DAYS);
  let numberOfDays = daysArray();
  let setData = daysOfTheWeek.reduce((accum, day, indx) => {
    accum[day] = numberOfDays[indx];
    return accum;
  }, {});
  return setData;
};

// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +new Date(`${year}-${zeroPad(month, 2)}-01`).getDay();
};

export const formatDate2 = (time) => {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
