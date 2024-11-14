import { Link } from 'react-router-dom'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui'
import { IDotsVertical } from '../ui/icons'

export const MenuActions = ({ id, to }) => {
	const [toView, toEdit] = to

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<span className='flex w-5 h-5 rounded-full'>
					<IDotsVertical />
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem>
					<Link to={`/${toView}/${id}`} className='w-full'>
						Ver
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to={`/${toEdit}/${id}`} className='w-full'>
						Editar
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>Cancelar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
