export const HeaderResultClients = () => {
	return (
		<>
			<div className='w-full flex gap-2 rounded-xl justify-between p-4 mb-4'>
				<div className='hidden md:block w-[3%]'>
					<input type='checkbox' />
				</div>

				<div className='w-[40%] md:w-[35%]'>Nombre</div>

				<div className='w-[40%] md:w-[20%]'>Correo</div>

				<div className='hidden md:block w-[15%]'>Teléfono</div>

				<div className='flex items-center justify-end w-[5%] md:w-[3%]'></div>
			</div>
		</>
	)
}
