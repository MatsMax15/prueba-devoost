export const useCalcTotales = ({ watch, setValue }) => {
	const calcTotal = ({ items }) => {
		const total = items.reduce((acc, item) => acc + item.total, 0)

		setValue('total', total)
	}

	const handleChangeProduct = ({ index, products }) => {
		const product = watch(`product-${index}`)

		if (product) {
			const productSelected = products.find(
				(item) => item.id === parseInt(product)
			)

			setValue(`cantidad-${index}`, 1)
			setValue(`precio-${index}`, productSelected.price)

			calcSubtotal({ index })
			setValuesItems(watch().items)
		}
	}

	const calcSubtotal = ({ index }) => {
		const quantity = watch(`cantidad-${index}`)
		const price = watch(`precio-${index}`)
		const totalItem = quantity * price

		setValue(`total-${index}`, totalItem)
		const newItems = setValuesItems(watch().items)
		calcTotal({ items: newItems })
	}

	const setValuesItems = (items) => {
		const newItems = items.map((item, index) => {
			const product = watch(`product-${index}`)
			const quantity = watch(`cantidad-${index}`)
			const price = watch(`precio-${index}`)
			const totalItem = quantity * price

			return {
				id: index,
				quantity: quantity,
				price: price,
				total: totalItem,
				product_id: product,
			}
		})

		setValue('items', newItems)

		return newItems
	}

	return {
		handleChangeProduct,
		calcSubtotal,
		setValuesItems,
	}
}
