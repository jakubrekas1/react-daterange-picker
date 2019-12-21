import React from 'react';
import PropTypes from 'prop-types';

import CalendarDay from './CalendarDay';
import { formatDate } from '../../services';

const CLASSNAME = 'calendar__day';

const CalendarDayContainer = ({
  currentMonth, date, dateEnd, dateStart, onDayClick, reservedDates,
}) => {
  const formattedDate = formatDate(date);
  const range = [
    formatDate(dateStart), formatDate(dateEnd),
  ];

  const day = date.getDate();
  const month = date.getMonth();

  const isBetween = date > dateStart && date < dateEnd ? `${CLASSNAME}--is-between` : '';
  const isOtherMonth = month !== currentMonth ? `${CLASSNAME}--is-other-month` : '';
  const isReserved = reservedDates.find((reservedDate) => formatDate(reservedDate) === formatDate(date)) ? `${CLASSNAME}--is-reserved` : '';
  const isSelected = range.includes(formattedDate) ? `${CLASSNAME}--is-selected` : '';
  const isToday = formatDate(new Date()) === formattedDate ? `${CLASSNAME}--is-today` : '';

  return (
    <CalendarDay
      day={day}
      isBetween={isBetween}
      isOtherMonth={isOtherMonth}
      isReserved={isReserved}
      isSelected={isSelected}
      isToday={isToday}
      onDayClick={() => (!isOtherMonth ? onDayClick(date) : null)}
    />
  );
};

CalendarDayContainer.defaultProps = {
  dateEnd: null,
  dateStart: null,
  reservedDates: [],
};

CalendarDayContainer.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date),
  dateStart: PropTypes.instanceOf(Date),
  onDayClick: PropTypes.func.isRequired,
  reservedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
};

export default CalendarDayContainer;
