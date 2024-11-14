import { useUsers } from '../../hooks/useUsers'
import { LoadingResults, MenuActions } from '../layout'
import { Avatar, AvatarFallback, AvatarImage } from '../ui'

export const ListUsers = () => {
	const { data: response, isError, isLoading } = useUsers()

	if (isLoading) return <LoadingResults />

	if (isError) return <div>Error: {isError.message}</div>

	const { data } = response

	const handleDoubleClick = (id) => {
		console.log(id)
	}

	return (
		<>
			<div className='flex flex-col gap-2'>
				{data.map(({ id, name, email }) => (
					<div
						key={id}
						className='bg-slate-100 hover:bg-slate-50 shadow w-full flex gap-2 rounded-xl justify-between p-4 text-sm text-muted overflow-hidden'
						onDoubleClick={() => handleDoubleClick(id)}
					>
						<div className='hidden md:block w-[3%]'>
							<input type='checkbox' />
						</div>

						<div className='w-10'>
							<p className=''>
								<Avatar className='w-9 h-9 z-0'>
									<AvatarImage src='https://github.com/shadcn.png' />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</p>
						</div>

						<div className='w-[40%] md:w-[37%] flex items-center'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								{name}
							</p>
						</div>

						<div className='hidden md:flex w-[40%] md:w-[35%] items-center'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								{email}
							</p>
						</div>

						<div className='flex items-center justify-end w-[5%] md:w-[3%]'>
							<MenuActions id={id} to={['user', '']} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
