const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('button');
const errorInfo = document.querySelector('.error');
const countInfo = document.querySelector('.count-info');
const countHeight = document.querySelector('.cost');


const fieldsFilled = () => {
	countInfo.style.display = 'none';
	errorInfo.style.display = 'none';

	const priceValue = price.value.replace(',', '.');
	priceValue2 = parseFloat(priceValue);
	const peopleValue = parseFloat(people.value);

	if (isNaN(priceValue2) || price === '') {
		errorInfo.style.display = 'block';
		errorInfo.textContent = 'Uzupełnij poprawnie pola';
	} else if (isNaN(peopleValue) || people === '') {
		errorInfo.style.display = 'block';
		errorInfo.textContent = 'Uzupełnij poprawnie pola';
	} else if (tip.value === '0') {
		errorInfo.style.display = 'block';
		errorInfo.textContent = 'Uzupełnij poprawnie pola';
	} else {
		const suma = (priceValue2 + priceValue2 * tip.value) / peopleValue;

		countInfo.style.display = 'block';
		countHeight.textContent = suma.toFixed(2);
	}
};

const enterCheck = (e) => {
	if (e.key === 'Enter') {
		fieldsFilled();
	}
};

price.addEventListener('keyup', enterCheck);
people.addEventListener('keyup', enterCheck);
tip.addEventListener('keyup', enterCheck);
button.addEventListener('click', fieldsFilled);
