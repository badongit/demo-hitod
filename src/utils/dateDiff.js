import dayjs from "dayjs";

function dateDiff(from, to, type) {
  const dateFrom = dayjs(from);
  const dateTo = dayjs(to);
  return dateFrom.diff(dateTo, type);
}

export default dateDiff;
