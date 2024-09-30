// const moment = require('moment');
import moment from 'moment';

// Get the current date and time
const now = moment();

// Format the current date and time in different formats
const format1 = now.format('DD-MM-YYYY'); // format: day-month-year
const format2 = now.format('MMM Do YY');  // format: month day year
const format3 = now.format('dddd');       // format: day of week

// We output the results to the console
console.log('Current date and time (DD-MM-YYYY):', format1);
console.log('Current date and time (MMM Do YY):', format2);
console.log('Day of the week:', format3);
