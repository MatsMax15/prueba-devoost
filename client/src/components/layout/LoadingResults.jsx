import { Skeleton, TableCell, TableRow } from '../ui'

export const LoadingResults = () => {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className='bg-slate-100 shadow w-full flex gap-2 rounded-xl justify-between p-4 text-sm text-muted'
				>
					<div className='hidden md:block w-[3%]'>
						<Skeleton className='h-4' />
					</div>

					<div className='w-[20%] md:w-[10%]'>
						<Skeleton className='h-4' />
					</div>

					<div className='w-[40%] md:w-[35%]'>
						<Skeleton className='h-4' />
					</div>

					<div className='hidden md:block w-[20%]'>
						<Skeleton className='h-4' />
					</div>

					<div className='hidden md:block w-[15%]'>
						<Skeleton className='h-4' />
					</div>

					<div className='w-[22%] md:w-[15%] text-right'>
						<Skeleton className='h-4' />
					</div>
				</div>
			))}
		</>
	)
}
