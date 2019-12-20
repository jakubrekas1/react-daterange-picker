import React from 'react';
import PropTypes from 'prop-types';

import CalendarDay from './CalendarDay';
import { formatDate } from '../../services';

const CalendarDayContainer = ({
  currentMonth, date, dateEnd, dateStart, onDayClick,
}) => {
  const formattedDate = formatDate(date);
  const range = [
    formatDate(dateStart), formatDate(dateEnd),
  ];

  const day = date.getDate();
  const month = date.getMonth();

  const isBetween = date > dateStart && date < dateEnd ? 'calendar__day--is-between' : '';
  const isOtherMonth = month !== currentMonth ? 'calendar__day--is-other-month' : '';
  const isSelected = range.includes(formattedDate) ? 'calendar__day--is-selected' : '';
  const isToday = formatDate(new Date()) === formattedDate ? 'calendar__day--is-today' : '';

  return (
    <CalendarDay
      day={day}
      isBetween={isBetween}
      isOtherMonth={isOtherMonth}
      isSelected={isSelected}
      isToday={isToday}
      onDayClick={() => (!isOtherMonth ? onDayClick(date) : null)}
    />
  );
};

CalendarDayContainer.defaultProps = {
  dateEnd: null,
  dateStart: null,
};

CalendarDayContainer.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  dateEnd: PropTypes.instanceOf(Date),
  dateStart: PropTypes.instanceOf(Date),
  onDayClick: PropTypes.func.isRequired,
};

export default CalendarDayContainer;
