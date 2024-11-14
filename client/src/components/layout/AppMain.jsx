import { Outlet } from 'react-router-dom'

import { Button, SidebarTrigger, useSidebar } from '../ui'
import { ILogout } from '../ui/icons'
import { cn } from '../../lib/utils'

export const AppMain = () => {
	const { isMobile, open } = useSidebar()

	return (
		<>
			<main className='w-full relative'>
				<nav
					className={cn(
						'bg-primary text-accent h-16 flex items-center justify-between p-4 fixed top-0 right-0 z-10 transition-all duration-300 border-b',
						!isMobile && open ? 'w-[calc(100%-16rem)]' : 'w-full'
					)}
				>
					<SidebarTrigger />

					<Button
						to='/'
						size='icon'
						className='hover:bg-slate-200 rounded-full hover:text-slate-900 transition duration-300'
					>
						<span className='w-6 h-6'>
							<ILogout />
						</span>
					</Button>
				</nav>

				<div className='container p-4 mt-16'>
					<Outlet />
				</div>
			</main>
		</>
	)
}
