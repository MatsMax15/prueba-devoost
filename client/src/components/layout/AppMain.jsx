import { Outlet } from 'react-router-dom'
import { SidebarTrigger } from '../ui'

export const AppMain = () => {
	return (
		<>
			<main className='w-full'>
				<nav className='bg-primary text-accent h-16 flex items-center p-4'>
					<SidebarTrigger />
				</nav>

				<div className='container p-4'>
					<Outlet />
				</div>
			</main>
		</>
	)
}
