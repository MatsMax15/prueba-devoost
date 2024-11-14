import { ContainerResults, OrderDetails, TitlePage } from '../components'

export const OrderPage = () => {
	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl mb-4'>
					<TitlePage title='Orden de compra' />
				</div>

				{/* Detalles de la orden */}
				<ContainerResults>
					<OrderDetails />
				</ContainerResults>
			</div>
		</>
	)
}
