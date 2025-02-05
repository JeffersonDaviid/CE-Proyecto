import { calculateStockValues } from '../utils/utils.js';
const tbody = document.getElementById('stock-summary');
let finalStocks = [];

export function updateDashboard(
  stockName,
  quantity,
  purchaseDate,
  totalCost,
  currentValue,
  gainLoss,
  percentage,
  purchasePrice
) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${stockName}</td>
    <td>${quantity}</td>
    <td>${new Date(purchaseDate * 1000).toLocaleDateString()}</td>
    <td>$${purchasePrice.toFixed(2)}</td> <!-- Precio de compra -->
    <td>$${currentValue.toFixed(2)}</td> <!-- Valor actual total -->
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">$${gainLoss.toFixed(2)}</td>
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">${percentage}%</td>
  `;
  tbody.appendChild(row);
}

export function loadBuyHistory() {
  tbody.innerHTML = '';

  finalStocks.forEach((stock) => {
    updateDashboard(
      stock.stockName,
      stock.quantity,
      stock.purchaseDate,
      stock.totalCost,
      stock.currentPrice,
      stock.gainLoss,
      stock.percentage,
      stock.purchasePrice
    );
  });
}

export function sortStocks(order = 'alp') {
  const stocks = JSON.parse(localStorage.getItem('stocks')) || [];
  const stocksToday = JSON.parse(localStorage.getItem('stocksToday')) || [];

  // build the final data stock
  finalStocks = stocks.map((stock) => {
    const currentPrice = stocksToday.find(
      (s) => s.stockName === stock.stockName
    ).currentPrice;
    const { gainLoss, percentage } = calculateStockValues(
      stock.purchasePrice,
      currentPrice,
      stock.quantity
    );
    return {
      ...stock,
      currentPrice,
      gainLoss,
      percentage,
    };
  });

  switch (order) {
    case 'alp':
      finalStocks.sort((a, b) => a.stockName.localeCompare(b.stockName));
      break;
    case 'asc':
      finalStocks.sort((a, b) => a.gainLoss - b.gainLoss);
      break;
    case 'desc':
      finalStocks.sort((a, b) => b.gainLoss - a.gainLoss);
      break;
    default:
      break;
  }

  loadBuyHistory();
}

export function calculateResumen() {
  // Get stocks from local storage
  const stocks = JSON.parse(localStorage.getItem('stocks')) || [];

  // sort by stock name
  stocks.sort((a, b) => a.stockName.localeCompare(b.stockName));

  // join all actions with the same name}
  const stocksSummary = stocks.reduce((summary, stock) => {
    const existingStock = summary.find((s) => s.stockName === stock.stockName);
    if (existingStock) {
      existingStock.quantity += stock.quantity;
      existingStock.totalCost += stock.totalCost;
    } else {
      summary.push({ ...stock });
    }
    return summary;
  }, []);

  const tbody = document.getElementById('stock-summary2');
  // reset tbody, delete all rows
  tbody.innerHTML = '';

  // save in local storage
  let lsStocksSummary = [];

  stocksSummary.forEach((stock) => {
    const row = document.createElement('tr');
    // get current price of the stock from local storage
    const currentPrice = JSON.parse(localStorage.getItem('stocksToday')).find(
      (s) => s.stockName === stock.stockName
    ).currentPrice;

    const { gainLoss, percentage } = calculateStockValues(
      stock.totalCost / stock.quantity,
      currentPrice,
      stock.quantity
    );

    lsStocksSummary.push({
      stockName: stock.stockName,
      quantity: stock.quantity,
      totalCost: stock.totalCost,
      percentage: percentage,
      gainLoss: gainLoss,
    });

    row.innerHTML = `
      <td>${stock.stockName}</td>
      <td>${stock.quantity}</td>
      <td>$${stock.totalCost.toFixed(2)}</td> <!-- Valor total invertido -->
      <td>$${(stock.totalCost / stock.quantity).toFixed(2)}</td> <!-- Precio de compra -->
      <td class="${percentage >= 0 ? 'gain' : 'loss'}">${percentage}%</td>
      <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">$${gainLoss.toFixed(2)}</td>
    `;

    tbody.appendChild(row);
  });

  localStorage.setItem('stocksSummary', JSON.stringify(lsStocksSummary));
}