import { useToast } from '../../hooks/use-toast'
import { Button } from '../ui'

export const ToastMessage = () => {
	const { toast } = useToast()

	return (
		<>
			<Button
				onClick={() => {
					toast({
						title: 'Scheduled: Catch up',
						description: 'Friday, February 10, 2023 at 5:57 PM',
					})
				}}
			>
				Show Toast
			</Button>
		</>
	)
}
