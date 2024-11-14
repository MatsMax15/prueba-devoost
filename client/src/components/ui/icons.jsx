const PropsIcons = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '2',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
}

export const IHome = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M5 12l-2 0l9 -9l9 9l-2 0' />
			<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
			<path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
		</svg>
	)
}

export const IUser = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
			<path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
		</svg>
	)
}

export const IList = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M9 6l11 0' />
			<path d='M9 12l11 0' />
			<path d='M9 18l11 0' />
			<path d='M5 6l0 .01' />
			<path d='M5 12l0 .01' />
			<path d='M5 18l0 .01' />
		</svg>
	)
}

export const ITrashX = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4 7h16' />
			<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
			<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
			<path d='M10 12l4 4m0 -4l-4 4' />
		</svg>
	)
}

export const IConfig = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z' />
			<path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
		</svg>
	)
}

export const IOrders = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<circle cx='7' cy='7' r='4' />
			<path d='M7 3v4a4 4 0 0 0 4 4h4' />
			<path d='M16 17v4a4 4 0 0 1 -4 4h-4' />
		</svg>
	)
}

export const IChevronRight = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M9 6l6 6l-6 6' />
		</svg>
	)
}

export const IChevronLeft = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M15 6l-6 6l6 6' />
		</svg>
	)
}

export const IDotsVertical = () => {
	return (
		<svg {...PropsIcons}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
			<path d='M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
			<path d='M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
		</svg>
	)
}
