const setRomColor = (hex) => {
  document.getElementsByTagName("body")[0].style.setProperty('--romColor', hex);
}

export { setRomColor }
