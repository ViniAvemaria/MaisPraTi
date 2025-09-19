package Exercicio05;

import java.math.BigDecimal;

public class CreditCard extends PaymentMethod{
    private final String cardNumber;

    public CreditCard(String cardNumber) {
        this.cardNumber = cardNumber.trim();
    }

    @Override
    public void validatePayment() {
        if(this.cardNumber.length() != 16 || !this.cardNumber.matches("\\d+")) {
            throw new IllegalArgumentException("Número de cartão de crédito inválido");
        }
    }

    @Override
    public void processPayment(BigDecimal amount) {
        validatePayment();
        System.out.println("Pagamento de R$"+ amount +" com cartão de crédito efetuado com sucesso!");
    }
}
