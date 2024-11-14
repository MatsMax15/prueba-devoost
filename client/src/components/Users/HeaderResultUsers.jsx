export const HeaderResultUsers = () => {
	return (
		<>
			<div className='w-full flex gap-2 rounded-xl justify-between p-4 mb-4'>
				<div className='hidden md:block w-[3%]'>
					<input type='checkbox' />
				</div>

				<div className='w-10'>Foto</div>

				<div className='w-[40%] md:w-[37%]'>Nombre</div>

				<div className='hidden md:block w-[40%] md:w-[35%]'>Correo</div>

				<div className='flex items-center justify-end w-[5%] md:w-[3%]'></div>
			</div>
		</>
	)
}
