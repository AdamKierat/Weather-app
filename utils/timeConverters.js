export const getTimeToDisplay = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  var timeString = `${convertSingleNumber(hours)}:${convertSingleNumber(
    minutes
  )}`;

  return timeString;
};

export const getCurrentDateTime = (date) => {
  let dayNumber = date.getUTCDate();
  let day = dayNames[date.getUTCDay()];
  let month = monthNames[date.getUTCMonth()];
  let year = date.getUTCFullYear();
  let time = getTimeToDisplay(date);

  let stringResult = `${dayNumber} ${month} ${year}, ${time}`;

  return stringResult;
};

let convertSingleNumber = (number) => {
  if (number < 10) {
    return "0" + number.toString();
  }

  return number;
};

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
