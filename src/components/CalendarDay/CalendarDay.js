import React from 'react';
import PropTypes from 'prop-types';

const CalendarDay = ({
  day, isBetween, isOtherMonth, isSelected, isToday, onDayClick,
}) => {
  const className = ['calendar__day', isBetween, isOtherMonth, isSelected, isToday]
    .filter((el) => !!el)
    .join(' ');

  return (
    <div
      className={className}
      onClick={onDayClick}
    >
      {day}
    </div>
  );
};

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  isBetween: PropTypes.string.isRequired,
  isOtherMonth: PropTypes.string.isRequired,
  isSelected: PropTypes.string.isRequired,
  isToday: PropTypes.string.isRequired,
  onDayClick: PropTypes.func.isRequired,
};

export default CalendarDay;
