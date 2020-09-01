import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl'; // without this line it didn't work
import addDuty from '../../helpers/addDuty';
import deleteDuty from '../../helpers/deleteDuty';
import PropTypes from 'prop-types';
moment.locale('pl');

const Day = ({ day, data, refresh }) => {
  const loggedInId = '5f4a95df4d74782f6823ba47';
  const [offDutyMode, setOffDutyMode] = useState(true);
  const [isBusyDay, setIsBusyDay] = useState(false);
  const [found, setFound] = useState([]);
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
      console.log(busyDay);
      addDuty(body);
    }
  };

  useEffect(() => {
    setFound(data.filter((item) => item.dutyDate === searchParam));
    setBusyDay(
      data.find(
        (item) => (item.dutyDate === searchParam) && (item.userId === loggedInId)
      )
    );
    console.log(found);
  }, [data]);

  return (
    <>
      <article
        onClick={handleOnClick}
        className='tile m-3 notification is-primary'
      >
        <p className='title'>{day.getDate()}</p>
        <p className='subtitle'>{displayDate}</p>

        <div>
                  {found.map((item) => (
            <h4 key={item.dutyDate + item.userId}>
              {item.userId} {' - ' + item.dutyType}
            </h4>
          ))}
        </div>
      </article>
    </>
  );
};
Day.defaultProps = {};
Day.propTypes = {};

export default Day;
