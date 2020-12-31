const utils = {
  waitThreeSecondsIf: (getExpected, callback) => {
    let i = 0;
    const max = 12,
      milliseconds = 250,
      check = setInterval(() => {
        if (getExpected()) {
          clearInterval(check);
          callback()
        } else if (i >= max) clearInterval(check);
        else i++
      }, milliseconds)
  }
};
