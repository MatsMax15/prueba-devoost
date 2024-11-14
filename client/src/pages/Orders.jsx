import { Link } from 'react-router-dom'
import {
	ContainerResults,
	ListOrders,
	Separator,
	TitlePage,
} from '../components/'

export const OrdersPage = () => {
	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl'>
					<TitlePage title='Lista de Ordenes' />

					<Separator />

					<div className='pt-4 px-4'>
						<Link
							to='/order/new'
							className='bg-primary py-2 px-4 text-slate-300 rounded-xl'
						>
							+ Nueva Orden
						</Link>
					</div>

					<div className='w-full flex gap-2 rounded-xl justify-between p-4 mb-4'>
						<div className='hidden md:block w-[3%]'>
							<input type='checkbox' />
						</div>

						<div className='w-[20%] md:w-[10%]'>
							<p>Folio</p>
						</div>

						<div className='w-[40%] md:w-[35%]'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								Cliente
							</p>
						</div>

						<div className='hidden md:block w-[20%]'>
							<p className=''>Estatus</p>
						</div>

						<div className='hidden md:block w-[15%]'>
							<p className='hidden md:block'>Fecha</p>
						</div>

						<div className='w-[22%] md:w-[15%] text-center'>Total</div>

						<div className='flex items-center justify-end w-[5%] md:w-[3%]'></div>
					</div>
				</div>

				<ContainerResults>
					<ListOrders />
				</ContainerResults>
			</div>
		</>
	)
}
