export const calculateStockValues = (purchasePrice, currentPrice, quantity) => {
	const totalCost = purchasePrice * quantity; // Total invertido en la compra
	const currentValue = currentPrice * quantity; // Valor actual total de las acciones
	const gainLoss = currentValue - totalCost; // Ganancia/Pérdida total
	const percentage = ((gainLoss / totalCost) * 100).toFixed(2); // Porcentaje de ganancia/pérdida
  
	return {
	  totalCost,
	  currentValue,
	  gainLoss,
	  percentage,
	};
  };
  