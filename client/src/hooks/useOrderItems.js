import { useQuery } from '@tanstack/react-query'
import { getOrderItems } from './../services/orderItems'

export const useOrderItems = ({ orderId }) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['getOrderItems'],
		queryFn: () => getOrderItems({ orderId }),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error }
}
