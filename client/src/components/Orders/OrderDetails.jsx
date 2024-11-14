import { useParams } from 'react-router-dom'

import { Separator } from '../ui'
import { GetOrderById } from '../../hooks/useOrder'
import { LoadingResults } from '../layout/LoadingResults'
import { ListOrderItems } from './ListOrderItems'

export const OrderDetails = () => {
	const { id } = useParams()

	const { data: response, isLoading, isError } = GetOrderById({ id })

	if (isLoading) return <LoadingResults />

	if (isError) return <div>Error</div>

	const { data } = response

	return (
		<>
			<div className='flex flex-row gap-2 h-full'>
				{/* Detalles */}
				<section className='bg-slate-100 rounded-xl shadow w-1/3'>
					<div className='flex justify-between items-center py-4 border-b p-4 bg-primary rounded-t-xl'>
						<h1 className='text-slate-200'>Detalles</h1>

						<div className='flex items-center gap-2 text-sm text-slate-200'>
							Folio:
							<span className='rounded-xl bg-slate-300 text-primary px-4 py-1'>
								{data.id}
							</span>
						</div>
					</div>

					<section className='flex flex-col gap-2 p-4 text-sm'>
						<div className='flex gap-2'>
							<p className='w-1/5'>Cliente:</p>
							<p className='text-muted'>{data.client.name}</p>
						</div>

						<Separator />

						<div className='flex gap-2'>
							<p className='w-1/5'>Email:</p>
							<p className='text-muted'>{data.client.email}</p>
						</div>

						<Separator />

						<div className='flex gap-2'>
							<p className='w-1/5'>Télefono:</p>
							<p className='text-muted'>{data.client.phone}</p>
						</div>

						<Separator />

						<div className='flex gap-2'>
							<p className='w-1/5'>Fecha:</p>
							<p className='text-muted'>{data.created_at}</p>
						</div>

						<Separator />

						<div className='flex gap-2'>
							<p className='w-1/5'>Estado:</p>
							<p className='text-muted'>{data.status}</p>
						</div>

						<Separator />

						<div className='flex gap-2'>
							<p className='w-1/5'>Total:</p>
							<p className='text-muted'>{data.total}</p>
						</div>
					</section>
				</section>

				{/* Items */}
				<section className='bg-slate-100 rounded-xl shadow w-2/3'>
					<div className='flex items-center py-4 border-b p-4 bg-primary rounded-t-xl'>
						<h1 className='text-slate-200'>Productos</h1>
					</div>

					<ListOrderItems orderId={id} />
				</section>
			</div>
		</>
	)
}
