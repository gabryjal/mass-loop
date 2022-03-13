let input1 = document.querySelector('#calculator-input-first');
let input2 = document.querySelector('#calculator-input-second');
input1.addEventListener('change', updateValue);
input2.addEventListener('change', updateValue);
//
function updateValue() {
  let A = document.querySelector('#calculator-input-first').value;
  let B = document.querySelector('#calculator-input-second').value;
  let result = parseFloat((A*B-A*B/5).toFixed(2));
  let res = document.querySelector('.calculator__result-price');
  res.innerHTML = `<span style="color: #FFB001">`+result+` zł</span>`
}
