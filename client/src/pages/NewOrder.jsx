import { ContainerResults, FormNewOrder, TitlePage } from '../components'

export const NewOrder = () => {
	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl mb-4'>
					<div>
						<TitlePage title='Generar orden' />
					</div>
				</div>

				<ContainerResults>
					<FormNewOrder />
				</ContainerResults>
			</div>
		</>
	)
}
