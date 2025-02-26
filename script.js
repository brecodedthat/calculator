const hourlyRateInput = document.getElementById('hourlyRate')
const hoursPerDayInput = document.getElementById('hoursPerDay')
const daysPerWeekInput = document.getElementById('daysPerWeek')
const overtimePerWeekInput = document.getElementById('overtimePerWeek')

const hoursNumE1 = document.getElementById('hours-num')
const daysNumE1 = document.getElementById('days-num')
const overtimeNumE1 = document.getElementById('overtime-num')

hourlyRateInput.addEventListener('input', calculateSalary)
hoursPerDayInput.addEventListener('input', calculateSalary)
daysPerWeekInput.addEventListener('input', calculateSalary)
overtimePerWeekInput.addEventListener('input', calculateSalary)

function calculateSalary(){
	const hourlyRate= parseFloat(hourlyRateInput.value)
	const hoursPerDay= parseFloat(hoursPerDayInput.value)
	const daysPerWeek= parseFloat(daysPerWeekInput.value)
	const overtimePerWeek= parseFloat (overtimePerWeekInput.value)
	const hourlyAmount= hourlyRate * 1
	const dailyAmount= hourlyRate * hoursPerDay
	const weeklyAmount= dailyAmount * daysPerWeek
	const monthlyAmount= weeklyAmount * 4
	const annualAmount= monthlyAmount * 12
	const overtimeAmount= hourlyRate * overtimePerWeek * 1.5

hoursNumE1.innerText= hoursPerDayInput.value
daysNumE1.innerText= daysPerWeekInput.value
overtimeNumE1.innerText= overtimePerWeekInput.value

displayAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount, overtimeAmount)
}

function displayAmounts(hourlyAmount, dailyAmount, weeklyAmount, monthlyAmount, annualAmount, overtimeAmount){
	document.getElementById('hourlyAmount').textConent= `$${hourlyAmount.toFixed(2)}`
	document.getElementById('dailyAmount').textContent= `$${dailyAmount.toFixed(2)}`
	document.getElementById('weeklyAmount').textContent= `$${weeklyAmount.toFixed(2)}`
	document.getElementById('monthlyAmount').textContent= `$${monthlyAmount.toFixed(2)}`
	document.getElementById('annualAmount').textContent= `$${annualAmount.toFixed(2)}`
	document.getElementById('overtimeAmount').textContent= `$${overtimeAmount.toFixed(2)}`
	
}


