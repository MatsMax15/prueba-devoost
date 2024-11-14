import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { saveOrder } from '../services/orders'
import { toast } from './use-toast'

export const useSaveOrder = () => {
	const navigate = useNavigate()

	const { mutate, isPending, isSuccess } = useMutation({
		mutationFn: saveOrder,
		onSuccess: (data) => {
			const { status, data: response } = data

			if (status !== 200) {
				return toast({
					title: 'Ups! Algo salió mal: saveOrder',
					variant: 'destructive',
					description: response.statusText,
				})
			}

			toast({
				title: 'Orden de compra creada',
				description: response.statusText,
			})

			setTimeout(() => {
				navigate(`/order/${response.data.id}`, { replace: true })
			}, 1000)
		},
		onError: (error) => {
			return toast({
				title: 'Ups! Algo salió mal',
				variant: 'destructive',
				description: error.response.data.statusText,
			})
		},
	})

	return { saveOrder: mutate, isPending, isSuccess }
}
