export const Input = ({
	htmlFor,
	label,
	type,
	htmlClass,
	isRequired,
	placeholder,
	disabled = false,
	register,
	error,
}) => {
	const errorMessage = error?.message || 'Campo obligatorio'

	return (
		<div className='w-full'>
			<label className='text-muted text-sm relative' htmlFor={htmlFor}>
				{label}{' '}
				{isRequired && (
					<span className='absolute -right-4 text-red-600 text-2xl'>*</span>
				)}
			</label>
			<input
				type={type}
				className={`w-full py-1 px-2 border-2 text-sm rounded-xl focus:border-primary border-gray-300 outline-none ${htmlClass} ${
					error ? 'border-redtext-red-600' : 'mb-3'
				}`}
				placeholder={placeholder}
				id={htmlFor}
				name={htmlFor}
				// value={value}
				// onChange={fun}
				disabled={disabled}
				{...register}
			/>

			{error && (
				<span className='text-red-600 text-sm mb-3'>{errorMessage}</span>
			)}
		</div>
	)
}
