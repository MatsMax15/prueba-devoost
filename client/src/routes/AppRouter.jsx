import { createBrowserRouter } from 'react-router-dom'
import { LayoutHome } from '../layouts/Shop/LayoutHome'
import {
	HomePage,
	NotFoundPage,
	OrderPage,
	OrdersPage,
	NewOrder,
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
		],
	},
])
