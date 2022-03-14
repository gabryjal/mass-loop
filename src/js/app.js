//Calculator
let input1 = document.querySelector('#calculator-input-first');
let input2 = document.querySelector('#calculator-input-second');

[input1, input2].forEach((e) => {
  e.addEventListener('input', (e) => {
    let A = input1.value;
    let B = input2.value;
    if (A === "") {
      A = 20;
      input1.classList.remove('calculator__value-input--highlight');
    } else {
      input1.classList.add('calculator__value-input--highlight');
    }
    if (B === "") {
      B = 20;
      input2.classList.remove('calculator__value-input--highlight');
    }else {
      input2.classList.add('calculator__value-input--highlight');
    }
    let res = document.querySelector('.calculator__result-price');
    let result = (12*(A * B - A * B / 5)).toFixed(2);
    res.innerHTML = `<span style="color: #FFB001">` + result + ` zł</span>`
  });
});

//sticky header
window.addEventListener("scroll", ()=> {
  let header = document.querySelector(".header__fixed");
  header.classList.toggle("header__fixed--sticky", window.scrollY > 0);
})
