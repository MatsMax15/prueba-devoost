import { Link } from 'react-router-dom'
import {
	ContainerResults,
	HeaderResults,
	ListOrders,
	Separator,
	TitlePage,
} from '../components/'

export const OrdersPage = () => {
	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl sticky top-16 shadow-md'>
					<TitlePage title='Lista de Ordenes' />

					<Separator />

					<div className='pt-4 px-4'>
						<Link
							to='/order/new'
							className='bg-primary py-2 px-4 text-slate-300 rounded-xl text-sm hover:bg-primary-foreground hover:text-slate-100'
						>
							+ Nueva Orden
						</Link>
					</div>

					<HeaderResults />
				</div>

				<ContainerResults>
					<ListOrders />
				</ContainerResults>
			</div>
		</>
	)
}
