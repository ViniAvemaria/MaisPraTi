package Exercicio08;

import java.math.BigDecimal;

public class StorePickUp implements ShippingCalculator {
    @Override
    public BigDecimal calculate(Order order) {
        return BigDecimal.ZERO;
    }
}
