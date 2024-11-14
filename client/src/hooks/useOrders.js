import { useQuery } from '@tanstack/react-query'
import { getOrders } from './../services/orders'

export const GetOrders = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['getOrders'],
		queryFn: () => getOrders(),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error }
}
