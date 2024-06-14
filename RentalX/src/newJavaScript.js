function calculateDaysBetweenDates(begin, end) {
  var start = new Date(begin);
  var end = new Date(end);
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.round((end - start) / millisecondsPerDay);
}