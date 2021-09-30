module.exports = (ms) => {
  const e = Date.now() + ms;
  while (e > Date.now()) {}
}
