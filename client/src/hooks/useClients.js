import { useQuery } from '@tanstack/react-query'
import { getClients } from './../services/clients'

export const useClients = () => {
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['getClients'],
		queryFn: () => getClients(),
		config: {
			retry: 1,
			retryDelay: 1000,
			refetchOnWindowFocus: false,
		},
	})

	return { data, isLoading, isError, error, refetch }
}
