import { Link } from 'react-router-dom'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
} from '../ui'
import { ItemSidebar } from './ItemSidebar'
import { IChevronRight } from '../ui/icons'

export const AppSidebar = () => {
	return (
		<>
			<Sidebar>
				<SidebarHeader className='border-b'>
					<div className='flex gap-2 px-4 py-8'>
						<Avatar className='w-10 h-10'>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>

						<div className='flex flex-col justify-center'>
							<span className='text-slate-100 text-sm font-semibold'>
								Carlos Navarro
							</span>
							<span className='text-xs text-slate-400'>
								<Link
									to='/profile'
									className='flex ic hover:text-muted-foreground'
								>
									Mi perfil
									<span className='w-4 h-4 flex'>
										<IChevronRight />
									</span>
								</Link>
							</span>
						</div>
					</div>
				</SidebarHeader>
				<SidebarContent className='py-4'>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								<ItemSidebar to='/' text='Inicio' icon='IHome' />

								<ItemSidebar to='/users' text='Usuarios' icon='IUser' />

								<ItemSidebar to='/clients' text='Clientes' icon='IUSers' />

								<ItemSidebar to='/orders' text='Ordenes' icon='IList' />

								<ItemSidebar
									to='/products'
									text='Productos'
									icon='IListDetails'
								/>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
					<SidebarGroup />
				</SidebarContent>

				<SidebarFooter>
					<SidebarMenu title='Menu'>
						<ItemSidebar
							to='/config'
							text='Configuración'
							icon='IConfig'
							isOpen={open}
						/>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</>
	)
}
