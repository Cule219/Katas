const whatTimeIsIt = function (angle) {
  // Your code here
  let hour = Math.floor(angle / 30);
  let minute = Math.floor(angle % 30 * 2);
  if (hour === 0) hour = 12;
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  return `${hour}:${minute}`;
};
