import { fetchStockData } from '../../services/stock-service.js';
import { calculateStockValues } from '../../utils/utils.js';
import { loadBuyHistory, sortStocks } from '../../controllers/dashboard-ctrl.js';

// Elementos del DOM
const orderAlp = document.querySelector('#order-by-name');
const orderGainLoss = document.querySelector('#order-by-gainloss');
const orderAlpIcon = document.querySelector('.order-alp-icon');
const orderUpIcon = document.querySelector('.order-up-icon');
const orderDownIcon = document.querySelector('.order-down-icon');

// Inicialización
document.addEventListener('DOMContentLoaded', (event) => {
  const purchaseDateInput = document.getElementById('purchase-date');
  const today = new Date().toISOString().split('T')[0];
  purchaseDateInput.setAttribute('max', today);

  orderUpIcon.style.display = 'none';
  orderDownIcon.style.display = 'none';

  sortStocks(); // Cargar datos iniciales
});

// Evento para registrar una nueva compra
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

    // Guardar en localStorage el precio actual
    const stockToday = {
      stockName,
      currentPrice: stockData.currentPrice,
    };

    let stocksToday = JSON.parse(localStorage.getItem('stocksToday')) || [];
    let exist = stocksToday.find((stock) => stock.stockName === stockToday.stockName);
    if (exist) {
      exist.currentPrice = stockToday.currentPrice;
    } else {
      stocksToday.push(stockToday);
    }
    localStorage.setItem('stocksToday', JSON.stringify(stocksToday));

    // Calcular el costo total
    const { totalCost } = calculateStockValues(
      stockData.purchasePrice,
      stockData.currentPrice,
      quantity
    );

    // Guardar la nueva compra en localStorage
    const stock = {
      stockName,
      quantity,
      purchaseDate: new Date(purchaseDateAdjusted).getTime() / 1000,
      totalCost,
    };
    let stocks = JSON.parse(localStorage.getItem('stocks')) || [];
    stocks.push(stock);
    localStorage.setItem('stocks', JSON.stringify(stocks));

    // Actualizar la tabla
    sortStocks(); // Esto llama a loadBuyHistory() internamente
  } catch (error) {
    alert(error.message);
  }
});

// Listeners para ordenar la tabla
orderAlp.addEventListener('click', () => {
  orderAlpIcon.style.display = 'inline';
  orderUpIcon.style.display = 'none';
  orderDownIcon.style.display = 'none';
  sortStocks('alp');
});

orderGainLoss.addEventListener('click', () => {
  orderAlpIcon.style.display = 'none';

  if (orderUpIcon.style.display === 'none') {
    orderUpIcon.style.display = 'inline';
    orderDownIcon.style.display = 'none';
    sortStocks('asc');
  } else {
    orderUpIcon.style.display = 'none';
    orderDownIcon.style.display = 'inline';
    sortStocks('desc');
  }
});