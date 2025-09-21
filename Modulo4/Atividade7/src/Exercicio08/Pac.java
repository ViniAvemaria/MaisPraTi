package Exercicio08;

import java.math.BigDecimal;

public class Pac implements ShippingCalculator {
    private void validateCep(String cep) {
        if (cep == null || cep.length() != 8) {
            throw new InvalidCepException("CEP inválido: " + cep);
        }
    }

    @Override
    public BigDecimal calculate(Order order) {
        validateCep(order.getCep());
        return new BigDecimal("20.00");
    }
}
