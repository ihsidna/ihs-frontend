const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]

export const getDate = (dateString) =>{
	const date = new Date(dateString)
	const year = date.getFullYear()
	const day = date.getDate()
	const monthIndex = date.getMonth()
	const monthName = months[monthIndex]
	const formattedDate = `${day} ${monthName} ${year}`
	return formattedDate;
}