import { formatDate, getCalendarPageRange, getDatesFromRange } from './index';

describe('Date format', () => {
  it('should returns 2019/01/13', () => {
    const date = new Date(2019, 0, 13);
    expect(formatDate(date) === '2019/01/13').toBeTruthy();
  });
});

describe('Get first and last dates from calendar page', () => {
  it('should returns 2018/12/30 and 2019/02/02 for January 2019', () => {
    const month = 0; // January - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2018/12/30 - 2019/02/02';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/01/27 and 2019/03/02 for February 2019', () => {
    const month = 1; // February - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/01/27 - 2019/03/02';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/02/24 and 2019/04/06 for March 2019', () => {
    const month = 2; // March - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/02/24 - 2019/04/06';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/03/31 and 2019/05/04 for April 2019', () => {
    const month = 3; // April - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/03/31 - 2019/05/04';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/04/28 and 2019/06/01 for May 2019', () => {
    const month = 4; // May - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/04/28 - 2019/06/01';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/05/26 and 2019/07/06 for June 2019', () => {
    const month = 5; // June - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/05/26 - 2019/07/06';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/06/30 and 2019/08/03 for July 2019', () => {
    const month = 6; // July - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/06/30 - 2019/08/03';

    expect(expected).toEqual(received);
  });

  it('should return 2019/07/28 and 2019/08/31 for August 2019', () => {
    const month = 7; // August - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/07/28 - 2019/08/31';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/09/01 and 2019/10/05 for September 2019', () => {
    const month = 8; // September - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/09/01 - 2019/10/05';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/09/30 and 2019/11/02 for October 2019', () => {
    const month = 9; // October - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/09/29 - 2019/11/02';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/10/27 and 2019/11/30 for November 2019', () => {
    const month = 10; // November - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/10/27 - 2019/11/30';

    expect(expected).toEqual(received);
  });

  it('should returns 2019/12/01 and 2020/01/04 for December 2019', () => {
    const month = 11; // December - indexed from 0
    const year = 2019;

    const { renderFrom, renderTo } = getCalendarPageRange(month, year);

    const received = `${formatDate(renderFrom)} - ${formatDate(renderTo)}`;
    const expected = '2019/12/01 - 2020/01/04';

    expect(expected).toEqual(received);
  });
});

describe('Get dates from range', () => {
  it('should returns correctly dates', () => {
    const renderFrom = new Date(2019, 0, 1);
    const renderTo = new Date(2019, 0, 4);
    const dates = getDatesFromRange({ renderFrom, renderTo });

    expect(dates).toEqual([
      new Date(2019, 0, 1),
      new Date(2019, 0, 2),
      new Date(2019, 0, 3),
      new Date(2019, 0, 4),
    ]);
  });
});
