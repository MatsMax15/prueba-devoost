import { useForm } from 'react-hook-form'
import { Button, Input, Select } from '../ui'
import { ItemProductos, SelectOrderClient } from './'
import { useCalcTotales } from '../../hooks/useCalcTotales'
import { useSaveOrder } from '../../hooks/useSaveOrder'
import { useEffect } from 'react'

export const FormUpdateOrder = ({ order }) => {
	const defaultValuesItem = [
		{
			id: '',
			quantity: '',
			price: '',
			total: '',
			product_id: '',
		},
	]

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue,
	} = useForm({
		defaultValues: {
			client: '',
			folio: '',
			date: '',
			total: '',
			status: '',
			items: '',
		},
	})

	const { saveOrder, isPending, isSuccess } = useSaveOrder()
	const { handleChangeProduct } = useCalcTotales({ watch, setValue })

	const onSubmit = handleSubmit((data) => {
		const values = {
			client_id: data.client,
			status: data.status,
			items: data.items,
			created_by: 1,
		}

		saveOrder(values)
	})

	const handleClick = () => {
		setValue('items', [...watch().items, ...defaultValuesItem])
	}

	useEffect(() => {
		if (!order) return

		setValue('client', order.client.id)
		setValue('email', order.client.email)
		setValue('phone', order.client.phone)
		setValue('address', order.client.address)

		setValue('folio', order.id)
		setValue('date', order.created_at)
		setValue('total', order.total)
		setValue('status', order.status)
		setValue('items', order.items)
	}, [order, setValue])

	return (
		<>
			<form action='' onSubmit={onSubmit}>
				<div className='inline-block w-full'>
					<div className='w-[33%] flex flex-col gap-4 sticky top-20 float-start'>
						<div className='bg-slate-100 rounded-xl'>
							<div className='flex justify-between items-center py-4 bg-primary p-4 rounded-t-xl'>
								<h1 className='text-slate-200 text-lg'>Detalles</h1>
							</div>

							<div className='p-4'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<Input
										label='Folio'
										type='text'
										placeholder='Folio'
										htmlFor='folio'
										// disabled={true}
										register={register('folio')}
										error={errors?.date}
									/>

									<Input
										label='Fecha'
										type='date'
										placeholder='Fecha'
										htmlFor='date'
										disabled={true}
										register={register('date')}
										error={errors?.date}
									/>
								</div>

								<SelectOrderClient
									errors={errors}
									register={register}
									watch={watch}
									setValue={setValue}
								/>
							</div>
						</div>

						<div className='bg-slate-200 rounded-xl '>
							<div className='flex justify-between items-center py-4 border-b p-4 bg-primary rounded-t-xl'>
								<h1 className='text-slate-200'>Total</h1>
							</div>

							<div className='p-4 flex flex-col justify-between gap-4'>
								<Select
									label='Estatus'
									isRequired={true}
									htmlFor={`status`}
									register={{
										...register('status', {
											required: {
												value: true,
												message: 'Debes seleccionar un estatus.',
											},
										}),
									}}
									error={errors?.status}
									options={[
										{ id: 'completed', name: 'Completa' },
										{ id: 'pending', name: 'Pendiente' },
									]}
									fieldText='name'
									fieldValue='id'
								/>

								<div className='flex justify-between items-center'>
									<span className='font-medium text-sm'>Total orden:</span>
									<span className='text-xl'>${watch('total')}</span>
								</div>
							</div>
						</div>

						<div className='bg-slate-200 rounded-xl h-14 flex justify-between items-center p-4'>
							{isPending || isSuccess ? (
								<Button type='button' className='w-full' disabled>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									Guardando...
								</Button>
							) : (
								<Button type='submit' className='w-full'>
									Guardar
								</Button>
							)}
						</div>
					</div>

					<div className='flex flex-col gap-4 w-[66%] float-end'>
						<ItemProductos
							errors={errors}
							register={register}
							setValue={setValue}
							items={watch().items}
							watch={watch}
							handleChangeProduct={handleChangeProduct}
						/>

						<div className='bg-slate-200 rounded-xl h-14 flex justify-end items-center p-4'>
							<Button type='button' onClick={handleClick} variant='outline'>
								+ Agregar Item
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}
