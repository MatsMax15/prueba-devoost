export const HeaderResults = () => {
	return (
		<>
			<div className='w-full flex gap-2 rounded-xl justify-between p-4 mb-4'>
				<div className='hidden md:block w-[3%]'>
					<input type='checkbox' />
				</div>

				<div className='w-[20%] md:w-[10%]'>
					<p>Folio</p>
				</div>

				<div className='w-[40%] md:w-[35%]'>
					<p className='text-ellipsis overflow-hidden text-nowrap'>Cliente</p>
				</div>

				<div className='hidden md:block w-[20%]'>
					<p className=''>Estatus</p>
				</div>

				<div className='hidden md:block w-[15%]'>
					<p className='hidden md:block'>Fecha</p>
				</div>

				<div className='w-[22%] md:w-[15%] text-center'>Total</div>

				<div className='flex items-center justify-end w-[5%] md:w-[3%]'></div>
			</div>
		</>
	)
}
