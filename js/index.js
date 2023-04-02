'use strict'

const button = document.querySelector('button')
const output = document.querySelector('p')
const input = document.querySelector('input')

const convertCurrency = () => {
	const select = document.querySelector('select')
	fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${select.value}`)
		.then(response => response.json())
		.then(data => {
			if (isNaN(input.value)) {
				const message = document.querySelector('h2')
				message.style.display = 'block'
				return
			} else {
				const conversion = (data.rates[0].mid * Number(input.value)).toFixed(2)
				output.innerHTML = "to <span style='font-weight: bold;'>" + conversion + '</span> PLN'
			}
		})
}
button.addEventListener('click', () => {
	convertCurrency()
})
