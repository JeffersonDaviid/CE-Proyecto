export function updateDashboard(
	stockName,
	quantity,
	purchaseDate,
	totalCost,
	currentValue,
	gainLoss,
	percentage
) {
	const tbody = document.getElementById('stock-summary')

	const row = document.createElement('tr')
	row.innerHTML = `
    <td>${stockName}</td>
    <td>${quantity}</td>
    <td>${new Date(purchaseDate).toLocaleDateString()}</td>
    <td>${totalCost.toFixed(2)}</td>
    <td>${currentValue.toFixed(2)}</td>
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">${gainLoss.toFixed(2)}</td>
    <td class="${gainLoss >= 0 ? 'gain' : 'loss'}">${percentage}%</td>
  `

	tbody.appendChild(row)
}
