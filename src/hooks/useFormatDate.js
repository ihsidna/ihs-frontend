import moment from "moment-timezone";

// const months = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December'
// ]

export const WATDateString = (date) => {
  const dateString = new Date(date);
  const timezone = "Africa/Lagos"; // West African Timezone
  const formattedDate = moment.tz(dateString, timezone);
  return formattedDate.format(); // output: 2023-05-11T12:00:00+01:00
};

export const getDate = (dateString) => {
  const timezone = "Africa/Lagos"; // the timezone from the original date
  const date = moment.tz(dateString, timezone);
  return date.format("D MMM YYYY");
};
