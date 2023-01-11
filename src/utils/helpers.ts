export const getTime = (seconds: number) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  let time = date.toISOString().substring(14, 19);
  time = seconds === 60*60 ? "60:00" : time;
  return time;
};