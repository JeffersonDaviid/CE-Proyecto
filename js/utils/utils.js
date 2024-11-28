export const calculateStockValues = (purchasePrice, currentPrice) => {
	const totalCost = purchasePrice * quantity // Total invested in the purchase
	const currentValue = currentPrice * quantity // Current total value of the stocks
	const gainLoss = currentValue - totalCost // Total gain/loss
	const percentage = ((gainLoss / totalCost) * 100).toFixed(2) // Gain/loss percentage

	return {
		totalCost,
		currentValue,
		gainLoss,
		percentage,
	}
}
