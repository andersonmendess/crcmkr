const setRomColor = (hex) => {
  document.getElementsByTagName('body')[0].style.setProperty('--romColor', hex);
};

const changeTheme = ({ background, foreground, text }) => {
  const body = document.getElementsByTagName('body')[0];

  body.style.setProperty('--background', background);
  body.style.setProperty('--foreground', foreground);
  body.style.setProperty('--text', text);
};

export { setRomColor, changeTheme };
