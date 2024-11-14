import { Link, useNavigate } from 'react-router-dom'
import { GetOrders } from './../../hooks/useOrders'
import { numberFormat } from '../../helpers/numberFormat'

import { LoadingResults } from '../layout/LoadingResults'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui'
import { IDotsVertical } from '../ui/icons'
import { MenuActions } from '../layout'

export const ListOrders = () => {
	const navigate = useNavigate()

	const { data: response, isLoading, isError, error } = GetOrders()

	if (isLoading) return <LoadingResults />

	if (isError) return <div>Error: {error.message}</div>

	const { data } = response

	const handleDoubleClick = (id) => {
		navigate(`/order/${id}`)
	}

	return (
		<>
			<div className='flex flex-col gap-2'>
				{data.map(({ id, status, total, created_at, client }) => (
					<div
						key={id}
						className='bg-slate-100 hover:bg-slate-50 shadow w-full flex gap-2 rounded-xl justify-between p-4 text-sm text-muted'
						onDoubleClick={() => handleDoubleClick(id)}
					>
						<div className='hidden md:block w-[3%]'>
							<input type='checkbox' />
						</div>

						<div className='w-[20%] md:w-[10%]'>
							<p>{id}</p>
						</div>

						<div className='w-[40%] md:w-[35%]'>
							<p className='text-ellipsis overflow-hidden text-nowrap'>
								{client.name}
							</p>
						</div>

						<div className='hidden md:block w-[20%]'>
							<p className=''>{status}</p>
						</div>

						<div className='hidden md:block w-[15%]'>
							<p className='hidden md:block'>{created_at}</p>
						</div>

						<div className='w-[22%] md:w-[15%] text-right'>
							<p>{numberFormat(total)}</p>
						</div>

						<div className='flex items-center justify-end w-[5%] md:w-[3%]'>
							<MenuActions id={id} to={['order', `order/edit`]} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
