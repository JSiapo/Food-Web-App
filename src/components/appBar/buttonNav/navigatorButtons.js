import React from 'react';
import { daysObject } from 'utils/dateUtil';
import ButtonBar from 'components/appBar/buttonNav/ButtonBarComponent';

const NavigatorButtons = () => {
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
};

export default NavigatorButtons;
