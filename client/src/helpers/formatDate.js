export const formatDate = (date) => {
	const newDate = new Date(date)

	const opciones = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	}
	return newDate.toLocaleDateString('es-MX', opciones)
}
