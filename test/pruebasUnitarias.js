import { calculateStockValues } from "../utils/utils.js";

describe("calculateStockValues", () => {
  test("debería calcular correctamente los valores cuando hay ganancia", () => {
    const result = calculateStockValues(10, 15, 100);
    expect(result.totalCost).toBe(1000);
    expect(result.currentValue).toBe(1500);
    expect(result.gainLoss).toBe(500);
    expect(result.percentage).toBe("50.00");
  });

  test("debería calcular correctamente los valores cuando hay pérdida", () => {
    const result = calculateStockValues(20, 10, 50);
    expect(result.totalCost).toBe(1000);
    expect(result.currentValue).toBe(500);
    expect(result.gainLoss).toBe(-500);
    expect(result.percentage).toBe("-50.00");
  });

  test("debería calcular correctamente los valores cuando no hay cambio en el precio", () => {
    const result = calculateStockValues(30, 30, 10);
    expect(result.totalCost).toBe(300);
    expect(result.currentValue).toBe(300);
    expect(result.gainLoss).toBe(0);
    expect(result.percentage).toBe("0.00");
  });

  test("debería manejar correctamente la cantidad de acciones en cero", () => {
    const result = calculateStockValues(50, 60, 0);
    expect(result.totalCost).toBe(0);
    expect(result.currentValue).toBe(0);
    expect(result.gainLoss).toBe(0);
    expect(result.percentage).toBe("NaN");
  });
});
