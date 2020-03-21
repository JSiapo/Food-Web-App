import React from 'react';
import { daysObject } from 'utils/dateUtil';
import ButtonBar from 'components/appBar/buttonNav/ButtonBarComponent';

export default function NavigatorButtons() {
  return (
    <div>
      {daysObject.daysName.map((dayName, ind) => {
        return (
          <ButtonBar
            key={ind}
            dayName={dayName}
            dayMonth={daysObject.daysMonth[ind]}
          />
        );
      })}
    </div>
  );
}
