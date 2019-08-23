const getTodayDay = () => new Date().getDate();

const getTodayMonth = () => new Date().getMonth() + 1;

const getMonthString = () => {
  let monthNumber = getTodayMonth();
  let months = [null,
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
    'December'
  ];

  return months[monthNumber];
};


export { getTodayDay, getMonthString }
