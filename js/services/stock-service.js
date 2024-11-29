export async function fetchStockData(stockName, purchaseDate) {
	const apiKey = 'WIHWUHV5NNL5K90R'; // Reemplaza con tu clave de API de Alpha Vantage
  
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
  