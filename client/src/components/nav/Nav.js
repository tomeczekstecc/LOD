import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { getMonthName } from '../../helpers/getMonthName';

const Nav = ({ month, year, increaseMonth, decreaseMonth }) => {

  return (
    <div className='section'>
      <FaChevronCircleLeft onClick={decreaseMonth} />
      {getMonthName(month)}
      <FaChevronCircleRight onClick={increaseMonth} />
    </div>
  );
};

export default Nav;
