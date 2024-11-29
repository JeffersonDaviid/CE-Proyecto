import { fetchStockData } from './stock-service.js';

document.getElementById('stock-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const stockName = document.getElementById('stock-name').value.toUpperCase();
  const quantity = parseInt(document.getElementById('quantity').value);
  const purchaseDate = document.getElementById('purchase-date').value; // Formato YYYY-MM-DD

  try {
    const { purchasePrice, currentPrice } = await fetchStockData(stockName, purchaseDate);

    if (purchasePrice === null) {
      alert('No se encontró el precio de la acción para la fecha de compra.');
      return;
    }

    if (currentPrice === null) {
      alert('No se pudo obtener el precio actual de la acción.');
      return;
    }

    // Calcular valores
    const totalCost = purchasePrice * quantity;
    const currentValue = currentPrice * quantity;
    const gainLoss = currentValue - totalCost;
    const percentage = ((gainLoss / totalCost) * 100).toFixed(2);

    updateDashboard(stockName, quantity, purchaseDate, totalCost, currentValue, gainLoss, percentage);
  } catch (error) {
    alert(error.message);
  }
});

function updateDashboard(stockName, quantity, purchaseDate, totalCost, currentValue, gainLoss, percentage) {
  const tbody = document.getElementById('stock-summary');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${stockName}</td>
    <td>${quantity}</td>
    <td>${new Date(purchaseDate).toLocaleDateString()}</td>
    <td>${totalCost.toFixed(2)}</td>
    <td>${currentValue.toFixed(2)}</td>
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">${gainLoss.toFixed(2)}</td>
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">${percentage}%</td>
  `;

  tbody.appendChild(row);
}
