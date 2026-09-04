const amountInput = document.getElementById('amount');
const termInput = document.getElementById('term');
const rateInput = document.getElementById('rate');

const amountBox = document.getElementById('amount-box');
const termBox = document.getElementById('term-box');
const rateBox = document.getElementById('rate-box');

const repaymentRadio = document.getElementById('repayment');
const interestRadio = document.getElementById('interest');

const labelTypeElements = document.getElementsByClassName('labelType'); 
const repaymentLabel = labelTypeElements[0];
const interestLabel = labelTypeElements[1];

const typeError = document.getElementById('type-error');

const emptyState = document.getElementById('empty-state');
const resultsState = document.getElementById('results-state');

const monthlyPaymentText = document.getElementById('monthly-payment');
const totalPaymentText = document.getElementById('total-payment');

repaymentRadio.addEventListener('change', function() {
  repaymentLabel.classList.add('selected');
  interestLabel.classList.remove('selected');
  typeError.style.display = 'none';
});

interestRadio.addEventListener('change', function() {
  interestLabel.classList.add('selected');
  repaymentLabel.classList.remove('selected');
  typeError.style.display = 'none';
});

document.getElementById('calculate').addEventListener('click', function(event) {
  event.preventDefault();
  
  let isValid = true;

  if (amountInput.value === '') {
    amountBox.classList.add('error');
    isValid = false;
  } else {
    amountBox.classList.remove('error');
  }

  if (termInput.value === '') {
    termBox.classList.add('error');
    isValid = false;
  } else {
    termBox.classList.remove('error');
  }

  if (rateInput.value === '') {
    rateBox.classList.add('error');
    isValid = false;
  } else {
    rateBox.classList.remove('error');
  }

  if (repaymentRadio.checked === false && interestRadio.checked === false) {
    typeError.style.display = 'block';
    isValid = false;
  } else {
    typeError.style.display = 'none';
  }

  if (isValid === true) {
    const amount = Number(amountInput.value);
    const termYears = Number(termInput.value);
    const annualRate = Number(rateInput.value);

    const monthlyRate = (annualRate / 100) / 12;
    const totalPayments = termYears * 12;

    let monthlyRepayment = 0;
    let totalRepay = 0;

    if (repaymentRadio.checked === true) {
      if (monthlyRate === 0) {
        monthlyRepayment = amount / totalPayments;
      } else {
        const ratePower = Math.pow(1 + monthlyRate, totalPayments);
        monthlyRepayment = amount * (monthlyRate * ratePower) / (ratePower - 1);
      }
      totalRepay = monthlyRepayment * totalPayments;

    } else if (interestRadio.checked === true) {
      monthlyRepayment = amount * monthlyRate;
      totalRepay = monthlyRepayment * totalPayments;
    }

    monthlyPaymentText.textContent = '£' + monthlyRepayment.toFixed(2);
    totalPaymentText.textContent = '£' + totalRepay.toFixed(2);

    emptyState.style.display = 'none';
    resultsState.style.display = 'flex';
  }
});

amountInput.addEventListener('input', function() {
  amountBox.classList.remove('error');
});

termInput.addEventListener('input', function() {
  termBox.classList.remove('error');
});

rateInput.addEventListener('input', function() {
  rateBox.classList.remove('error');
});

document.getElementById('clear').addEventListener('click', function(event) {
  event.preventDefault();
  
  amountInput.value = '';
  termInput.value = '';
  rateInput.value = '';
  repaymentRadio.checked = false;
  interestRadio.checked = false;

  amountBox.classList.remove('error');
  termBox.classList.remove('error');
  rateBox.classList.remove('error');
  typeError.style.display = 'none';
  repaymentLabel.classList.remove('selected');
  interestLabel.classList.remove('selected');

  emptyState.style.display = 'flex';
  resultsState.style.display = 'none';
});