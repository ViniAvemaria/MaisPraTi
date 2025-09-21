package Exercicio08;

import java.math.BigDecimal;

public class Order {
    private final String cep;
    private final BigDecimal total;
    private ShippingCalculator shippingType;

    public Order(String cep, BigDecimal total, ShippingCalculator shippingType) {
        this.cep = cep;
        this.total = total;
        this.shippingType = shippingType;
    }

    public String getCep() {
        return this.cep;
    }

    public BigDecimal getTotal() {
        return this.total;
    }

    public void setShippingType(ShippingCalculator shippingType) {
        this.shippingType = shippingType;
    }

    public BigDecimal calculateShipping() {
        return shippingType.calculate(this);
    }
}
