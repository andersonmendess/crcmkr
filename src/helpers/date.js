const getTodayDay = () => new Date().getDate();

const getTodayMonth = () => new Date().getMonth() + 1;

const getMonthString = () => {
  const monthNumber = getTodayMonth();
  const months = [null,
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[monthNumber];
};

const getDatetimeNumbers = () => {
  const d = new Date();

  let date = d.toISOString().slice(0, 10).replace(/-/g, '');
  let time = d.toISOString().slice(11, 19).replace(/:/g, '');

  return `${date}-${time}`;
}


export { getTodayDay, getMonthString, getDatetimeNumbers };
