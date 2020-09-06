import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl'; // without this line it didn't work
import addDuty from '../../helpers/addDuty';
import deleteDuty from '../../helpers/deleteDuty';
import {DayStyles} from './Day.styles'
import PropTypes from 'prop-types';
moment.locale('pl');

const Day = ({ day, data, loading, setLoading }) => {
  const loggedInId = '5f4a95df4d74782f6823ba47';
  const [offDutyMode, setOffDutyMode] = useState(false);
  const [found, setFound] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  const [hasDutyOn, setHasDutyOn] = useState(false)
  const [busyDay, setBusyDay] = useState(null);
  const displayDate = moment(day).format('dddd');
  const searchParam = moment(day).format('YYYY-MM-DD');

  const handleOnClick = () => {
    if (busyDay && loggedInId === busyDay.userId) {
      deleteDuty(busyDay._id);
    } else {
      let dutyType;
      if (offDutyMode) {
        dutyType = 'dutyOff';
      } else {
        dutyType = 'dutyOn';
      }
      const body = {
        userId: loggedInId,
        dutyDate: searchParam,
        dutyType,
      };
      addDuty(body);
    }

    // to refresh data from parent
    setTimeout(()=>setLoading(!loading),500)
    setIsFetching(true)
    setTimeout(()=>setIsFetching(false),500)
  };

  useEffect(() => {
    setFound(data.filter((item) => item.dutyDate === searchParam));
    setBusyDay(
      data.find((item) => {
        if (item.dutyDate === searchParam && item.userId === loggedInId) {
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
      >
        <p className='title'>{day.getDate()}</p>
        <p className='subtitle'>{displayDate}</p>

        <div className='found'>
          {found.map((item) => (
            <h4 key={item.dutyDate + item.userId}>
              {item.userId} {' - ' + item.dutyType}
            </h4>
          ))}
        </div>
      </DayStyles>
    </>
  );
};
Day.defaultProps = {};
Day.propTypes = {};

export default Day;
