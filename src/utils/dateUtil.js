import moment from 'moment';
import 'moment/locale/es';
import { numberOfDay } from 'config';

const DAY_NAME_FORMAT = 'ddd';
const DAY_MONTH_FORMAT = 'DD';

/*Change Name days of the week to spanish e.g. MON(Mondat) -> LUN(lunes)*/
moment.locale('es');

/**
 * return 3 arrays with formats days
 * dayId return id for loop Button component as key 🔑
 * daysName return day name (string) e.g. MAR
 * daysMonth return day mont (string) e.g.  14
 */

function days() {
  const dayId = [];
  const daysName = [];
  const daysMonth = [];
  for (let dayCount = 0; dayCount < numberOfDay - 1; dayCount++) {
    const day = new moment().add(dayCount, 'day');
    daysName.push(
      day
        .format(DAY_NAME_FORMAT)
        .toUpperCase()
        .slice(0, -1)
    );
    daysMonth.push(day.format(DAY_MONTH_FORMAT));
    dayId.push(dayCount);
  }
  return { daysName, daysMonth, dayId };
}

export const daysObject = days();
