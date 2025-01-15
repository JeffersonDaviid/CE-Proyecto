import { fetchStockData } from './services/stock-service.js';
import { calculateStockValues } from './utils/utils.js';
import { updateDashboard } from './controllers/dashboard-ctrl.js';

document.getElementById('stock-form').addEventListener('submit', async function (e) {
	e.preventDefault();

	const stockName = document.getElementById('stock-name').value.toUpperCase().trim();
	const quantity = parseInt(document.getElementById('quantity').value);
	const purchaseDate = document.getElementById('purchase-date').value;

	const purchaseDateObj = new Date(purchaseDate);
	purchaseDateObj.setDate(purchaseDateObj.getDate() + 1);
	const purchaseDateAdjusted = purchaseDateObj.toISOString().split('T')[0];

	try {
		if (isNaN(quantity) || quantity <= 0) {
			alert('La cantidad debe ser un número mayor a 0.');
			return;
		}
		if (stockName === '') {
			alert('El nombre de la acción no puede estar vacío.');
			return;
		}

		const stockData = await fetchStockData(stockName, purchaseDateAdjusted);

		if (stockData.purchasePrice === null) {
			alert('No se encontró el precio de la acción para la fecha de compra.');
			return;
		}

		if (stockData.currentPrice === null) {
			alert('No se pudo obtener el precio actual de la acción.');
			return;
		}

		const { totalCost, currentValue, gainLoss, percentage } = calculateStockValues(
			stockData.purchasePrice,
			stockData.currentPrice,
			quantity
		);

		updateDashboard(
			stockName,
			quantity,
			new Date(purchaseDateAdjusted).getTime() / 1000,
			totalCost,
			currentValue,
			gainLoss,
			percentage
		);
	} catch (error) {
		alert(error.message);
	}
});

document.addEventListener('DOMContentLoaded', (event) => {
	const purchaseDateInput = document.getElementById('purchase-date');

	const today = new Date().toISOString().split('T')[0];

	purchaseDateInput.setAttribute('max', today);
});
