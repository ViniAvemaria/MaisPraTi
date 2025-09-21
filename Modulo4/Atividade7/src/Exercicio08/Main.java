package Exercicio08;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Order order = new Order("12345678", new BigDecimal("250.00"), new Sedex());

        System.out.println("Frete Sedex: " + order.calculateShipping());

        order.setShippingType(new Pac());
        System.out.println("Frete PAC: " + order.calculateShipping());

        order.setShippingType(new StorePickUp());
        System.out.println("Retirada na loja: " + order.calculateShipping());

        // teste de frete promocional
        try {
            order.setShippingType(o -> {
                if (o.getTotal().compareTo(new BigDecimal("200")) >= 0) {
                    return BigDecimal.ZERO;
                }
                throw new InsufficientAmountException("Produto não disponível para promoção: valor mínimo não atingido");
            });

            System.out.println("Frete promocional: " + order.calculateShipping());
        } catch (InsufficientAmountException e) {
            System.out.println("Erro: " +e.getMessage());
        }

        // teste de cep inválido
        try {
            Order invalidOrder = new Order("12", new BigDecimal("100.00"), new Sedex());
            System.out.println(invalidOrder.calculateShipping());
        } catch (InvalidCepException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
