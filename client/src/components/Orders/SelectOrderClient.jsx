import { useEffect } from 'react'
import { useClients } from '../../hooks/useClients'
import { Input, Select } from '../ui'

export const SelectOrderClient = ({
	isDisabled = false,
	register,
	errors,
	watch,
	setValue,
}) => {
	const { data: response, isLoading, isError } = useClients()

	const clientSelected = watch('client')
	useEffect(() => {
		if (clientSelected && response) {
			const client = response?.data?.find(
				(item) => item.id === parseInt(clientSelected)
			)

			setValue('email', client.email)
			setValue('phone', client.phone)
			setValue('address', client.address)
		}
	}, [clientSelected, response, setValue])

	if (isLoading)
		return (
			<>
				<div className='flex flex-col gap-2'>
					<label htmlFor='client'>Selecciona un cliente</label>
					<select name='client' id='client'>
						<option value=''>Cargando clientes...</option>
					</select>
				</div>
			</>
		)

	if (isError) return <p>Error</p>

	const { data } = response

	return (
		<>
			<div className='grid grid-cols-1'>
				<Select
					label='Cliente'
					isRequired={true}
					htmlFor='client'
					disabled={isDisabled}
					register={{
						...register('client', {
							required: {
								value: true,
								message: 'Debes seleccionar un cliente.',
							},
						}),
					}}
					error={errors?.client}
					options={data}
					fieldText='name'
					fieldValue='id'
				/>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<Input
					label='Email'
					type='text'
					placeholder='Email'
					htmlFor='email'
					disabled={true}
					register={register('email', { required: true })}
					error={errors?.email}
				/>

				<Input
					label='Télefono'
					type='text'
					placeholder='Télefono'
					htmlFor='phone'
					disabled={true}
					register={register('phone', { required: true })}
					error={errors?.phone}
				/>
			</div>

			<div className='grid grid-cols-1 gap-4'>
				<Input
					label='Dirección'
					type='text'
					placeholder='Dirección'
					htmlFor='address'
					disabled={true}
					register={register('address', { required: true })}
					error={errors?.address}
				/>
			</div>
		</>
	)
}
