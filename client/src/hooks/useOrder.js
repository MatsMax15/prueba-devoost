import { useQuery } from '@tanstack/react-query'
import { getOrderById } from './../services/orders'

export const GetOrderById = ({ id }) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['getOrderById'],
		queryFn: () => getOrderById({ id }),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error }
}
