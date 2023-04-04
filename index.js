'use strict'

const button = document.querySelector('button')
const output = document.querySelector('p')
const input = document.querySelector('input')

const convertCurrency = () => {
	const select = document.querySelector('select')
	fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${select.value}`)
		.then(response => response.json())
		.then(data => {
			const conversion = (data.rates[0].mid * Number(input.value)).toFixed(2)
			output.innerHTML = `to <span style='font-weight: bold;'>${conversion}</span> PLN`
		})
		.catch(e => console.error(e))
}
button.addEventListener('click', () => {
	if (input.value === 'e' || input.value <= 0) {
		const message = document.querySelector('h2')
		message.style.display = 'block'
		return
	}
	convertCurrency()
})
