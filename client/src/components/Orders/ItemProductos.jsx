import { useCalcTotales } from '../../hooks/useCalcTotales'
import { useProducts } from '../../hooks/useProducts'

import { Button, Input, Select } from '../ui'
import { ITrashX } from '../ui/icons'

export const ItemProductos = ({
	errors,
	register,
	items,
	watch,
	setValue,
	handleChangeProduct,
}) => {
	const { data, isError, isLoading } = useProducts()

	const { setValuesItems, calcSubtotal } = useCalcTotales({ watch, setValue })

	if (isLoading) return <p>Cargando productos...</p>

	if (isError) return <p>Error al cargar los productos</p>

	const products = data.data

	const handleRemoveItem = ({ index }) => {
		if (items.length === 1) return

		const newItems = items.filter((_, i) => i !== index)
		setValue('items', newItems)
		setValuesItems(newItems)
	}

	return (
		<>
			{items.map((item, index) => (
				<div className='bg-slate-200 rounded-xl' key={index}>
					<div className='relative flex justify-between items-center py-4 border-b p-4 bg-secondary rounded-t-xl'>
						<h1 className='text-slate-200'>Producto {index + 1}</h1>

						{items.length > 1 && (
							<Button
								type='button'
								className='bg-red-400 hover:bg-red-500 rounded-full p-2 absolute top-3 right-4'
								size='sm'
								onClick={() => handleRemoveItem({ index })}
							>
								<ITrashX />
							</Button>
						)}
					</div>

					<div className='p-4'>
						<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
							<Select
								label='Producto'
								isRequired={true}
								htmlFor={`product-${index}`}
								register={{
									...register(`product-${index}`, {
										required: {
											value: true,
											message: 'Debes seleccionar un producto.',
										},
										onChange: () =>
											handleChangeProduct({ index, products, watch }),
									}),
								}}
								error={errors?.[`product-${index}`]}
								options={products}
								fieldText='name'
								fieldValue='id'
							/>

							<Input
								label='Cantidad'
								isRequired={true}
								type='number'
								placeholder='Cantidad'
								htmlFor={`cantidad-${index}`}
								register={register(`cantidad-${index}`, {
									required: 'Campo obligatorio',
									onChange: (e) => calcSubtotal({ e, index }),
								})}
								error={errors?.[`cantidad-${index}`]}
							/>

							<Input
								label='Precio'
								isRequired={true}
								type='number'
								placeholder='Precio'
								htmlFor={`precio-${index}`}
								register={register(`precio-${index}`, {
									required: 'Campo obligatorio',
									onChange: (e) => calcSubtotal({ e, index }),
								})}
								error={errors?.[`precio-${index}`]}
							/>

							<Input
								label='Total'
								isRequired={true}
								disabled={true}
								type='number'
								placeholder='Total'
								htmlFor={`total-${index}`}
								register={register(`total-${index}`, {
									required: 'Campo obligatorio',
								})}
								error={errors?.[`total-${index}`]}
							/>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
