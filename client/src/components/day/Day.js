import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl'; // without this line it didn't work
import addDuty from '../../helpers/addDuty';
import deleteDuty from '../../helpers/deleteDuty';
import { DayStyles } from './Day.styles';

moment.locale('pl');

const Day = ({
  day,
  data,
  loading,
  setLoading,
  offDutyMode,
  loggedInUsername,
  accessToken
}) => {
  const [found, setFound] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasDutyOn, setHasDutyOn] = useState(false);
  const [busyDay, setBusyDay] = useState(null);
  const displayDate = moment(day).format('dddd');
  const searchParam = moment(day).format('YYYY-MM-DD');

  const handleOnClick = () => {

    if (busyDay && loggedInUsername === busyDay.username) {
console.log(loggedInUsername);
      deleteDuty(busyDay._id, accessToken);
    } else {
      let dutyType;
      if (offDutyMode === true) {
        dutyType = 'dutyOff';
      } else {
        dutyType = 'dutyOn';
      }
      const body = {
        loggedInUsername,
        accessToken,
        dutyDate: searchParam,
        dutyType,
      };

      addDuty(body);
    }

    // to refresh data from parent
    setTimeout(() => setLoading(!loading), 500);
    setIsFetching(true);
    setTimeout(() => setIsFetching(false), 500);
  };

  useEffect(() => {
    setFound(data.filter((item) => item.dutyDate === searchParam));
    setBusyDay(
      data.find((item) => {
        if (
          item.dutyDate === searchParam &&
          item.username === loggedInUsername
        ) {
          return true;
        } else {
          return false;
        }
      })
    );

    setHasDutyOn(
      data.find((item) => {
        if (item.dutyDate === searchParam && item.dutyType === 'dutyOn') {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [data]);

  return (
    <>
      {/* disable if loading */}
      <DayStyles
        isFetching={isFetching}
        hasDutyOn={hasDutyOn}
        onClick={handleOnClick}
        className='tile m-3 notification is-primary'
        day={day.getDay()}
      >
        <p className='title'>{day.getDate()}</p>
        <p className='subtitle'>{displayDate}</p>

        <div className='found'>
          {found.map((item) => (
            <h4 key={item.dutyDate + item.userId}>
              {item.username} {' - ' + item.dutyType}
            </h4>
          ))}
        </div>
      </DayStyles>
    </>
  );
};


export default Day;
