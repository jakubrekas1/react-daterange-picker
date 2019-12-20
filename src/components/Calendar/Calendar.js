import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { MONTHS, WEEK_DAYS } from '../../constants';

import { CalendarDay } from '../CalendarDay';

const Calendar = ({
  currentMonth,
  dateEnd,
  dateStart,
  dates,
  onDayClick,
  onNextMonthClick,
  onPrevMonthClick,
  year,
}) => {
  const dayWeeks = useMemo(
    () => WEEK_DAYS.map((weekDay) => <div key={weekDay}>{weekDay}</div>),
    [],
  );

  const days = useMemo(
    () => dates.map((date) => (
      <CalendarDay
        currentMonth={currentMonth}
        date={date}
        dateEnd={dateEnd}
        dateStart={dateStart}
        key={`${date.getDate()}_${date.getMonth()}`}
        onDayClick={onDayClick}
      />
    )),
    [currentMonth, dateEnd, dateStart, dates, onDayClick],
  );

  return (
    <div>
      <div className="calendar__header">
        <button
          className="calendar__btn calendar__btn--prev"
          onClick={onPrevMonthClick}
          type="button"
        >
          {'<'}
        </button>
        <div className="calendar__title">
          {MONTHS[currentMonth]}
          {' '}
          {year}
        </div>
        <button
          className="calendar__btn calendar__btn--next"
          onClick={onNextMonthClick}
          type="button"
        >
          {'>'}
        </button>
      </div>
      <div className="calendar__body">
        <div className="calendar__day-weeks">{dayWeeks}</div>
        <div className="calendar__days">{days}</div>
      </div>
    </div>
  );
};

Calendar.defaultProps = {
  dateEnd: null,
  dateStart: null,
  dates: [],
};

Calendar.propTypes = {
  currentMonth: PropTypes.number.isRequired,
  dateEnd: PropTypes.instanceOf(Date),
  dateStart: PropTypes.instanceOf(Date),
  dates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  onDayClick: PropTypes.func.isRequired,
  onNextMonthClick: PropTypes.func.isRequired,
  onPrevMonthClick: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendar;
