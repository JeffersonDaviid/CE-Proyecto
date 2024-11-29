import { fetchStockData } from './services/stock-service.js';
import { calculateStockValues } from './utils/utils.js';
import { updateDashboard } from './controllers/dashboard-ctrl.js';

document.getElementById('stock-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const stockName = document.getElementById('stock-name').value.toUpperCase();
  const quantity = parseInt(document.getElementById('quantity').value);
  const purchaseDate = document.getElementById('purchase-date').value;

  try {
    const stockData = await fetchStockData(stockName, purchaseDate);

    if (stockData.purchasePrice === null) {
      alert('No se encontró el precio de la acción para la fecha de compra.');
      return;
    }

    if (stockData.currentPrice === null) {
      alert('No se pudo obtener el precio actual de la acción.');
      return;
    }

    // Calcular valores utilizando la función de utilidades
    const { totalCost, currentValue, gainLoss, percentage } = calculateStockValues(
      stockData.purchasePrice,
      stockData.currentPrice,
      quantity
    );

    updateDashboard(
      stockName,
      quantity,
      new Date(purchaseDate).getTime() / 1000,
      totalCost,
      currentValue,
      gainLoss,
      percentage
    );
  } catch (error) {
    alert(error.message);
  }
});
