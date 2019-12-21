import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getCalendarPageRange, getDatesFromRange } from '../../services';

import Calendar from './Calendar';

import './styles.scss';

const CalendarContainer = ({
  defaultCurrentDate, defaultDateEnd, defaultDateStart, onChange, reservedDates: reserved,
}) => {
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

  // Default date on calendar open
  const [currentDate] = useState(
    defaultCurrentDate
      ? new Date(defaultCurrentDate)
      : new Date(),
  );
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const [calendarPageRange, setCalendarPageRange] = useState(null);
  const [dates, setDates] = useState(null);

  const [error, setError] = useState(null);

  const reservedDates = reserved.map((date) => new Date(date));

  const handleDayClick = useCallback(
    (date) => {
      const isReservedDate = !!reservedDates.find(
        (reservedDate) => (reservedDate <= dateStart && reservedDate >= date)
          || (reservedDate <= date && reservedDate >= dateEnd),
      );

      if (isReservedDate && dateStart) {
        setError('The selected date includes the reserved date. Please choose a different period.');
        setDateStart(null);
        setDateEnd(null);
        return;
      }

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
    [dateEnd, dateStart, reservedDates],
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
    if (dateStart && dateEnd) {
      setError(null);

      if (onChange) {
        onChange(dateStart, dateEnd);
      }
    }
  }, [dateStart, dateEnd, onChange]);

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
      error={error}
      onDayClick={handleDayClick}
      onNextMonthClick={handleNextMonthClick}
      onPrevMonthClick={handlePrevMonthClick}
      reservedDates={reservedDates}
      year={currentYear}
    />
  ) : null;
};

CalendarContainer.defaultProps = {
  defaultCurrentDate: null,
  defaultDateEnd: null,
  defaultDateStart: null,
  onChange: null,
  reservedDates: [],
};

CalendarContainer.propTypes = {
  defaultCurrentDate: PropTypes.instanceOf(Date),
  defaultDateEnd: PropTypes.instanceOf(Date),
  defaultDateStart: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  reservedDates: PropTypes.arrayOf(PropTypes.string),
};

export default CalendarContainer;
