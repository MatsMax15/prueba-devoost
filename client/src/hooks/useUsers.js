import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../services/users'

export const useUsers = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['getUsers'],
		queryFn: () => getUsers(),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error }
}
