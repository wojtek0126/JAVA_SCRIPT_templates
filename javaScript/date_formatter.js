const date = "2021-12-06T14:29:50.768101Z";

const dateFormatter = (date) => {
  let dateSplitted = [...date];
  let year = [];
  let day = [];
  let month = [];
  let hour = [];
  let minute = [];
  let second = [];
  const dateSep = "-";
  const timeSep = ":";
  const dateTimeSep = " "
    for (let i = 0; i <= dateSplitted.length - 1; i++) {
    // if input format has year, day etc. in different places than here,
    // just use console log to locate which index is assigned to wchich symbol/number and change conditions accordingly
  if (i>=0 && i <=3) year.push(dateSplitted[i]);
  if (i>=5 && i <= 6) day.push(dateSplitted[i]);
  if (i>=8 && i <= 9) month.push(dateSplitted[i]);
  if (i>=11 && i <=12) hour.push(dateSplitted[i]);
  if (i>=14 && i <=15) minute.push(dateSplitted[i]);
  if (i>=17 && i <= 18) second.push(dateSplitted[i]);
    }
    // below final format, You can customize it by moving the parts. by default "day-month-year hour:minute"
const dateReFormatted = [day.join(""), dateSep, month.join(""), dateSep, year.join(""), dateTimeSep, hour.join(""), timeSep, minute.join("")].join("")
  return dateReFormatted;
};

console.log(dateFormatter(date));

let x = new Date() 