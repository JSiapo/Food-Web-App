import moment from 'moment';
import 'moment/locale/es';
import { numberOfDay } from 'config';

const DAY_NAME_FORMAT = 'ddd';
const DAY_MONTH_FORMAT = 'DD';

moment.locale('es');

function days() {
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
  }
  return { daysName, daysMonth };
}

export const daysObject = days();
