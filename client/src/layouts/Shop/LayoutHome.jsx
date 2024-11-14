import { ScrollRestoration } from 'react-router-dom'
import { AppSidebar, SidebarProvider, Toaster } from '../../components'
import { AppMain } from '../../components/layout/AppMain'

export const LayoutHome = () => {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />

				<AppMain />

				<Toaster />
				<ScrollRestoration />
			</SidebarProvider>
		</>
	)
}
