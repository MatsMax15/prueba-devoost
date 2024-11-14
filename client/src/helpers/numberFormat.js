export const numberFormat = (value) => {
	return new Intl.NumberFormat('es-US', {
		style: 'currency',
		currency: 'USD',
	}).format(value)
}
