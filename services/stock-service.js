const apiKey = 'PHPXRNPVIXXAMWWX';

export async function fetchStockData(stockName, purchaseDate) {
	try {
		const response = await fetch(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${apiKey}&outputsize=full&datatype=csv`
		);

		const data = await response.text();
		const rows = data.split('\n');

		let purchasePrice = null;
		let currentPrice = null;

		for (let row of rows) {
			const [date, open, high, low, close, volume] = row.split(',');

			if (date && date === purchaseDate) {
				purchasePrice = parseFloat(close);
			}
			if (date && new Date(date) <= new Date() && !currentPrice) {
				currentPrice = parseFloat(close);
			}

			if (purchasePrice && currentPrice) {
				break;
			}
		}

		return { purchasePrice, currentPrice };
	} catch (error) {
		console.error('Error al realizar la solicitud:', error);
		throw new Error('Hubo un error al obtener los datos.');
	}
}

export async function fetchCurrentPrice(stockName) {
	try {
		const response = await fetch(
			`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${apiKey}&outputsize=full&datatype=csv`
		);

		const data = await response.text();
		const rows = data.split('\n');

		let currentPrice = null;
		console.log(rows);

		for (let row of rows) {
			const [date, open, high, low, close, volume] = row.split(',');

			if (date && new Date(date) <= new Date() && !currentPrice) {
				currentPrice = parseFloat(close);
			}

			if (currentPrice) {
				break;
			}
		}

		return currentPrice;
	} catch (error) {
		console.error('Error al realizar la solicitud:', error);
		throw new Error('Hubo un error al obtener los datos.');
	}
}
