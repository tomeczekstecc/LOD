import React, { useEffect, useState } from 'react';
import Day from './components/day/Day';
import { getDaysInMonth } from './helpers/getDaysInMonth';
import { getDaysFromDataBase } from './helpers/getDaysFromDataBase';
import './App.css';

function App() {
  const [days, setDays] = useState([]);
  const [data, setData] = useState(null);
  const year = 2020;
  const month = 7;

  const refresh = () =>{
    getDaysFromDataBase(month, year).then((data) => setData(data));
  };

  useEffect(() => {
    setDays(getDaysInMonth(month, year));
    getDaysFromDataBase(month, year).then((data) => setData(data));

  }, []);

  const renderDays = days.map((day) => (
    <Day key={day} day={day} data={data} refresh={refresh} />
  ));

  if (data) {
    return <div className='App ml-5 mr-5 mt-5 mb-5'>{renderDays}</div>;
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;
