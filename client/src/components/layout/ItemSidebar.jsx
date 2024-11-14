import { NavLink } from 'react-router-dom'
import { SidebarMenuButton, SidebarMenuItem } from './../ui/sidebar'
import * as icons from './../ui/icons'

export const ItemSidebar = ({ to, text, icon }) => {
	const Icon = icons[icon]

	return (
		<>
			<SidebarMenuItem>
				<NavLink to={to}>
					{({ isActive }) => (
						<SidebarMenuButton isActive={isActive}>
							<span className='w-5 h-5 '>
								<Icon />
							</span>

							<span>{text}</span>
						</SidebarMenuButton>
					)}
				</NavLink>
			</SidebarMenuItem>
		</>
	)
}
