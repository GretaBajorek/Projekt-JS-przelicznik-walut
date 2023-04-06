'use strict'

const button = document.querySelector('.container-active__button')
const output = document.querySelector('.container-active__output')
const input = document.querySelector('.container-active__input')
const message = document.querySelector('.container-active__alert')

const convertCurrency = () => {
	const select = document.querySelector('select')
	fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${select.value}`)
		.then(response => response.json())
		.then(data => {
			const conversion = (data.rates[0].mid * Number(input.value)).toFixed(2)
			output.innerHTML = `to <span>${conversion}</span> PLN`
		})
		.catch(e => alert('W tej chwili nie możemy przeliczyć kwoty, spróbuj później'))
}

button.addEventListener('click', () => {
	if (input.value === 'e' || input.value <= 0) {
		message.style.display = 'block'
		return
	}
	convertCurrency()
})

input.addEventListener('input', () => {
	message.style.display = 'none'
})
