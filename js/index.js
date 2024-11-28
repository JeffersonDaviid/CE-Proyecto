import { fetchStockData } from './services/stock-service.js'
import { calculateStockValues } from './utils.js'

document.getElementById('stock-form').addEventListener('submit', async function (e) {
	e.preventDefault()
	const stockName = document.getElementById('stock-name').value.toUpperCase()
	const quantity = parseInt(document.getElementById('quantity').value)
	const purchaseDate = document.getElementById('purchase-date').value

	let stockData
	try {
		stockData = await fetchStockData(stockName, purchaseDate)
		if (stockData.currentPrice === null) {
			alert('No se pudo obtener el precio actual de la acción.')
			return
		}

		if (stockData.purchasePrice === null) {
			alert('No se encontró el precio de la acción para la fecha de compra.')
			return
		}
	} catch (error) {}

	const { totalCost, currentValue, gainLoss, percentage } = calculateStockValues(
		stockData.purchasePrice,
		stockData.currentPrice
	)
})
