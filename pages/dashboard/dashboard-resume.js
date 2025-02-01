import { calculateResumen } from '../../controllers/dashboard-ctrl.js';
let currentChart = null;
let top5StockNames = [];
let top5Values = [];

document.addEventListener('DOMContentLoaded', (event) => {
	calculateResumen();

	const stocksSummary = JSON.parse(localStorage.getItem('stocksSummary')) || [];
	stocksSummary.sort((a, b) => b.quantity - a.quantity);
	if (stocksSummary.length > 5) stocksSummary = stocksSummary.slice(-5);

	const label = 'Acciones';
	top5Values = stocksSummary.map((stock) => stock.quantity);
	top5StockNames = stocksSummary.map((stock) => stock.stockName);

	loadDataChart(top5StockNames, top5Values, label);
});

document.querySelectorAll('.stock-filter').forEach((radio) => {
	radio.addEventListener('change', (event) => {
		const filter = event.target.value;
		let stocksSummary = JSON.parse(localStorage.getItem('stocksSummary')) || [];
		let label = '';

		if (filter === 'quantity') {
			label = '# Acciones';
			//sort by quantity
			stocksSummary.sort((a, b) => b.quantity - a.quantity);
		} else if (filter === 'gain') {
			label = '$$ Ganancia';
			// sort by gain, just positive values
			stocksSummary = stocksSummary.filter((stock) => stock.gainLoss >= 0);
			stocksSummary.sort((a, b) => b.gainLoss - a.gainLoss);
		} else {
			label = '$$ Pérdida';
			// sort by loss, just negative values
			stocksSummary = stocksSummary.filter((stock) => stock.gainLoss < 0);
			stocksSummary.sort((a, b) => a.gainLoss - b.gainLoss);
		}

		// values just top 5 values but just exist more than 5 values
		if (stocksSummary.length > 5) stocksSummary = stocksSummary.slice(-5);

		top5StockNames = stocksSummary.map((stock) => stock.stockName);
		filter === 'quantity'
			? (top5Values = stocksSummary.map((stock) => stock.quantity))
			: (top5Values = stocksSummary.map((stock) => stock.gainLoss));

		loadDataChart(top5StockNames, top5Values, label);
	});
});

function loadDataChart(stockNames, values, label) {
	const canvas = document.querySelector('.myChart');

	if (!canvas) {
		console.error('Canvas con la clase "myChart" no encontrado.');
		return;
	}

	if (currentChart) {
		currentChart.destroy();
	}

	if (stockNames.length === 0) {
		stockNames = ['No hay datos'];
		values = [0];
	}

	currentChart = new Chart(canvas, {
		type: 'doughnut',
		data: {
			labels: stockNames,
			datasets: [
				{
					data: values,
					label: label,
					borderWidth: 1,
				},
			],
		},
	});
}
