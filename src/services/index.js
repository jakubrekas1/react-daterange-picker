export const formatDate = (date) => {
  if (!(date instanceof Date)) {
    return null;
  }

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
};

export const getCalendarPageRange = (month, year) => {
  const dateStart = new Date(year, month, 1);
  const dateEnd = new Date(year, month + 1, 0);

  const daysInMonth = dateEnd.getDate();

  const dayWeekStart = dateStart.getDay();
  const dayWeekEnd = dateEnd.getDay();

  const renderFrom = new Date(year, month, dayWeekStart > 0 ? -dayWeekStart + 1 : 1);
  const renderTo = new Date(year, month, daysInMonth + (dayWeekEnd > 0 ? 6 - dayWeekEnd : 6));

  return {
    renderFrom,
    renderTo,
  };
};

export const getDatesFromRange = (range) => {
  const { renderFrom, renderTo } = range;
  const dates = [];

  while (renderFrom <= renderTo) {
    dates.push(new Date(renderFrom));
    renderFrom.setDate(renderFrom.getDate() + 1);
  }

  return dates;
};
