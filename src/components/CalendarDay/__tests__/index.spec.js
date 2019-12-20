import React from 'react';
import renderer from 'react-test-renderer';
import { CalendarDay } from '../index';

describe('Calendar day component', () => {
  it('should renders correctly - day between selected dates', () => {
    const Component = (
      <CalendarDay
        currentMonth={0}
        date={new Date(2019, 0, 7)}
        dateEnd={new Date(2019, 0, 12)}
        dateStart={new Date(2019, 0, 1)}
        onDayClick={() => null}
      />
    );
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - day from other month', () => {
    const Component = (
      <CalendarDay
        currentMonth={0}
        date={new Date(2019, 1, 1)}
        dateEnd={new Date(2019, 0, 12)}
        dateStart={new Date(2019, 0, 1)}
        onDayClick={() => null}
      />
    );
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders correctly - is selected', () => {
    const Component = (
      <CalendarDay
        currentMonth={0}
        date={new Date(2019, 0, 12)}
        dateEnd={new Date(2019, 0, 12)}
        dateStart={new Date(2019, 0, 1)}
        onDayClick={() => null}
      />
    );
    const tree = renderer.create(Component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
