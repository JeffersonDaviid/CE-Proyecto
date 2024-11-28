export const fetchStockData = async (stockName, purchaseDate) => {
	const apiKey = 'WIHWUHV5NNL5K90R'
	const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${apiKey}&outputsize=full&datatype=csv`
	try {
		const response = await fetch(API_URL)
		const data = await response.text()
		const rows = data.split('\n')

		// Buscar la fecha de compra en los datos
		let purchasePrice = null
		let currentPrice = null

		for (let row of rows) {
			const [date, open, high, low, close, volume] = row.split(',')

			if (date && date === purchaseDate) {
				purchasePrice = parseFloat(close)
			}
			if (date && new Date(date) <= new Date() && !currentPrice) {
				currentPrice = parseFloat(close)
			}

			if (purchasePrice && currentPrice) {
				// Salir del bucle si ambos precios se han encontrado
				return {
					purchasePrice,
					currentPrice,
				}
			}
		}

		if (purchasePrice === null) {
			alert('No se encontró el precio de la acción para la fecha de compra.')
		}

		if (currentPrice === null) {
			alert('No se pudo obtener el precio actual de la acción.')
		}

		return null
	} catch (error) {
		console.error('Error al realizar la solicitud:', error)
		alert('Hubo un error al obtener los datos. Intenta de nuevo más tarde.')
	}
}
