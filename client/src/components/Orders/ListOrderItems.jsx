import { useOrderItems } from '../../hooks/useOrderItems'

export const ListOrderItems = ({ orderId }) => {
	const { data: response, isError, isLoading } = useOrderItems({ orderId })

	if (isLoading) return <p>Loading...</p>

	if (isError) return <p>Error</p>

	const { data } = response

	return (
		<>
			<div className='p-4 '>
				{data.map(({ id, product, quantity, price, total }) => (
					<div
						key={id}
						className='flex gap-2 items-center p-4 border-b hover:bg-slate-200/40 transition duration-300'
					>
						<div className='w-12'>
							<img
								src={product.image}
								alt={product.name}
								className='rounded-xl w-12 h-12 shadow object-cover'
							/>
						</div>

						<div className='w-full'>
							<h1 className='text-primary text-lg'>{product.name}</h1>
							<div className='flex justify-between text-sm'>
								<p className='text-muted'>Cantidad: {quantity}</p>
								<p className='text-muted'>Precio: ${price}</p>
								<p className='text-muted'>Subtotal: ${total}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
