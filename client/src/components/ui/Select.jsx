export const Select = ({
	htmlFor,
	label,
	type,
	htmlClass,
	isRequired,
	placeholder,
	disabled = false,
	register,
	error,
	options = [],
	fieldText,
	fieldValue,
}) => {
	const errorMessage = error?.message || 'Campo obligatorio'

	return (
		<div className='w-full'>
			<label className='text-muted relative text-sm' htmlFor={htmlFor}>
				{label}{' '}
				{isRequired && (
					<span className='absolute -right-4 text-red-600 text-2xl'>*</span>
				)}
			</label>

			<select
				type={type}
				className={`w-full p-1 border-2 rounded-xl text-sm focus:border-primary border-gray-300 outline-none ${htmlClass} ${
					error ? 'border-redtext-red-600' : 'mb-3'
				}`}
				placeholder={placeholder}
				id={htmlFor}
				name={htmlFor}
				disabled={disabled}
				{...register}
			>
				<option value=''>Selecciona una opción</option>

				{options.map((option, index) => (
					<option key={index} value={option[fieldValue]}>
						{option[fieldText]}
					</option>
				))}
			</select>

			{error && (
				<span className='text-red-600 text-sm mb-3'>{errorMessage}</span>
			)}
		</div>
	)
}
