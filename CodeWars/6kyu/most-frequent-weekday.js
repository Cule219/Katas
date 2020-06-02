// https://www.codewars.com/kata/56eb16655250549e4b0013f4/solutions/javascript
function mostFrequentDays(year) {
  //your code here
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var date = new Date(`${year}/01/01`);
  let days = Array.from({ length: 7 }, (e) => 0);
  year = date.getYear();
  while (date.getYear() === year) {
    days[date.getDay()]++;
    date.setDate(date.getDate() + 1);
  }
  let max = Math.max(...days);
  return day.filter((_, i) => days[i] === max).sort();
}
