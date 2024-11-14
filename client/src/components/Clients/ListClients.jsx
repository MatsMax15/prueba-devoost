import { useClients } from '../../hooks/useClients'
import { LoadingResults, MenuActions } from '../layout'

export const ListClients = () => {
	const { data: response, isError, isLoading } = useClients()

	if (isLoading) return <LoadingResults />

	if (isError) return <div>Error: {isError.message}</div>

	const { data } = response

	const handleDoubleClick = (id) => {
		console.log(id)
	}

	return (
		<>
			<div className='flex flex-col gap-2'>
				{data.map(({ id, name, email, phone }) => (
					<div
						key={id}
						className='bg-slate-100 hover:bg-slate-50 shadow w-full flex gap-2 rounded-xl justify-between p-4 text-sm text-muted overflow-hidden'
						onDoubleClick={() => handleDoubleClick(id)}
					>
						<div className='hidden md:block w-[3%]'>
							<input type='checkbox' />
						</div>

						<div className='w-[40%] md:w-[35%]'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								{name}
							</p>
						</div>

						<div className='w-[40%] md:w-[20%]'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								{email}
							</p>
						</div>

						<div className='hidden md:block w-[15%]'>
							<p className='hidden md:block'>{phone}</p>
						</div>

						<div className='flex items-center justify-end w-[5%] md:w-[3%]'>
							<MenuActions id={id} to={['client', '']} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
