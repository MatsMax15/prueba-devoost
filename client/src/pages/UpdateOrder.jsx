import { useParams } from 'react-router-dom'
import { ContainerResults, FormUpdateOrder, TitlePage } from '../components'
import { GetOrderById } from '../hooks/useOrder'

export const UpdateOrder = () => {
	const { id } = useParams()
	const { data: response, isError, isLoading } = GetOrderById({ id })

	if (isLoading) return <div>Loading...</div>

	if (isError) return <div>Error: {isError.message}</div>

	const { data } = response

	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl mb-4'>
					<TitlePage title='Editar orden' />
				</div>

				<ContainerResults>
					<FormUpdateOrder order={data} />
				</ContainerResults>
			</div>
		</>
	)
}
