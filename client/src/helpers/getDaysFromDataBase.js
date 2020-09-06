export const getDaysFromDataBase = async (month, year) => {
  const monthParam = month + 1 > 9 ? month + 1 : '0' + (month + 1);

  const data = await (
    await fetch(
      `http://localhost:5000/api/stat/getallinmonth/${year}/${monthParam}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).json();


  return data.duties;
};

// module.exports = {
//   getDaysFromDataBase,
// };
