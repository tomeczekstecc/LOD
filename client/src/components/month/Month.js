import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Day from '../../components/day/Day';
import Nav from '../../components/nav/Nav';
import { MonthStyles, MonthWrapper } from './Month.styles';
import { getDaysInMonth } from '../../helpers/getDaysInMonth';
import { getDaysFromDataBase } from '../../helpers/getDaysFromDataBase';


function Month({ history }) {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  // if (
  //   !user.accessToken ||
  //   user.accessToken === undefined ||
  //   user.accessToken === ''
  // ) {
  //   history.push('/login');
  // }

  const [days, setDays] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstDay, setFirstDay] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [ghostDays, setGhostDays] = useState([]);



  useEffect(() => {
    const renderGhostDays = () => {
      if (days.length > 0) {
        let arr = [];
        let i;
        for (i = 1; i <firstDay; i++) {
        arr.push(i);
        }
        return arr;
      } else {
        return null;
      }
    };

    setDays(getDaysInMonth(month, year));
    getDaysFromDataBase(month, year).then((data) => setData(data));
    setGhostDays(renderGhostDays());
    setFirstDay(getFirstDayOfMonth(year,month));

  }, [loading, month, year, firstDay]);

  const renderDays = days.map((day) => (
    <Day
      key={day}
      day={day}
      data={data}
      loading={loading}
      setLoading={setLoading}
    />
  ));

  const getFirstDayOfMonth = (year,month) => {
    const curr = new Date(`${year},${month+1},1`);

    return (curr.getDay());
  };

  const increaseMonth = () => {
    setMonth( month + 1);
  };
  const decreaseMonth = () => {
    setMonth( month - 1);
  };

  if (data) {
    return (
      <MonthWrapper className='has-background-info-light'>
        <Nav
          increaseMonth={increaseMonth}
          decreaseMonth={decreaseMonth}
          month={month}
          year={year}
        />
        <MonthStyles className='App ml-5 mr-5 mt-5 mb-5 '>
          {ghostDays && ghostDays.map((item, i) => <div key={i}></div>)}
          {renderDays}
        </MonthStyles>
      </MonthWrapper>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Month;
