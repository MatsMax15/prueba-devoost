import { createBrowserRouter } from 'react-router-dom'
import { LayoutHome } from '../layouts/Shop/LayoutHome'
import {
	HomePage,
	NotFoundPage,
	OrderPage,
	OrdersPage,
	NewOrder,
	UsersPage,
	ClientsPage,
	ProductsPage,
	ConfigPage,
	ProfilePage,
	UpdateOrder,
} from '../pages'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutHome />,
		errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},

			// Orders
			{
				path: 'orders',
				element: <OrdersPage />,
			},
			{
				path: 'order/:id',
				element: <OrderPage />,
			},
			{
				path: 'order/new',
				element: <NewOrder />,
			},
			{
				path: 'order/edit/:id',
				element: <UpdateOrder />,
			},

			// Users
			{
				path: 'users',
				element: <UsersPage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},

			// Clients
			{
				path: 'clients',
				element: <ClientsPage />,
			},

			// Products
			{
				path: 'products',
				element: <ProductsPage />,
			},

			{
				path: 'config',
				element: <ConfigPage />,
			},
		],
	},
])
