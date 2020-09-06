import { modelNames } from 'mongoose';

export const getMonthName = (number) => {
  const months = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień',
  ];

 const monthName = months.map((month, i) => {
    if (i === number) {
      return month;
    } else {
      return null;
    }
  });
  return monthName
};
