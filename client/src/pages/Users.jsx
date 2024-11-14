import { Link } from 'react-router-dom'
import { ContainerResults, Separator, TitlePage } from '../components'
import { HeaderResultUsers, ListUsers } from '../components'

export const UsersPage = () => {
	return (
		<>
			<div className='p-8'>
				<div className='bg-slate-50 rounded-xl sticky top-16 shadow-md z-10'>
					<TitlePage title='Usuarios' />

					<Separator />

					<div className='pt-4 px-4'>
						<Link
							to='/user/add'
							className='bg-primary py-2 px-4 text-slate-300 rounded-xl text-sm hover:bg-primary-foreground hover:text-slate-100'
						>
							+ Nuevo usuario
						</Link>
					</div>

					<HeaderResultUsers />
				</div>

				<ContainerResults>
					<ListUsers />
				</ContainerResults>
			</div>
		</>
	)
}
