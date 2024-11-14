import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/products'

export const useProducts = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['getProducts'],
		queryFn: () => getProducts(),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error }
}
