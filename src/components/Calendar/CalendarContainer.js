import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getCalendarPageRange, getDatesFromRange } from '../../services';

import Calendar from './Calendar';

import './styles.scss';

const CalendarContainer = ({ defaultCurrentDate, defaultDateEnd, defaultDateStart }) => {
  const [dateStart, setDateStart] = useState(
    defaultDateStart
      ? new Date(defaultDateStart)
      : null,
  );
  const [dateEnd, setDateEnd] = useState(
    defaultDateEnd
      ? new Date(defaultDateEnd)
      : null,
  );

  const [currentDate] = useState(
    defaultCurrentDate
      ? new Date(defaultCurrentDate)
      : new Date(),
  );
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const [calendarPageRange, setCalendarPageRange] = useState(null);
  const [dates, setDates] = useState(null);

  const handleDayClick = useCallback(
    (date) => {
      if (!dateStart || (date === dateStart || date === dateEnd)) {
        setDateStart(date);
        setDateEnd(date);
        return;
      }

      if (date < dateStart) {
        setDateStart(date);
        return;
      }

      if (date > dateStart) {
        setDateEnd(date);
      }
    },
    [dateEnd, dateStart],
  );

  const handlePrevMonthClick = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
      return;
    }

    setCurrentMonth((prev) => prev - 1);
  }, [currentMonth]);

  const handleNextMonthClick = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
      return;
    }

    setCurrentMonth((prev) => prev + 1);
  }, [currentMonth]);

  useEffect(() => {
  }, [dateStart, dateEnd]);

  useEffect(() => {
    setCalendarPageRange(getCalendarPageRange(currentMonth, currentYear));
  }, [currentMonth, currentYear]);

  useEffect(() => {
    if (calendarPageRange) {
      setDates(getDatesFromRange(calendarPageRange));
    }
  }, [calendarPageRange]);

  return dates ? (
    <Calendar
      currentMonth={currentMonth}
      dateEnd={dateEnd}
      dateStart={dateStart}
      dates={dates}
      onDayClick={handleDayClick}
      onNextMonthClick={handleNextMonthClick}
      onPrevMonthClick={handlePrevMonthClick}
      year={currentYear}
    />
  ) : null;
};

CalendarContainer.defaultProps = {
  defaultCurrentDate: null,
  defaultDateEnd: null,
  defaultDateStart: null,
};

CalendarContainer.propTypes = {
  defaultCurrentDate: PropTypes.instanceOf(Date),
  defaultDateEnd: PropTypes.instanceOf(Date),
  defaultDateStart: PropTypes.instanceOf(Date),
};

export default CalendarContainer;
