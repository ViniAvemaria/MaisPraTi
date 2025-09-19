package Exercicio05;

import java.math.BigDecimal;

public class Pix extends PaymentMethod{
    private final String pixKey;

    public Pix(String pixKey) {
        this.pixKey = pixKey.trim();
    }

    @Override
    public void validatePayment() {
        if (pixKey.matches("\\d+")) {
            if (pixKey.length() != 11) {
                throw new InvalidPaymentException("Chave Pix CPF inválida");
            }
        } else if (pixKey.contains("@") && pixKey.contains(".")) {
            String[] parts = pixKey.split("@");
            if (parts.length != 2 || !parts[1].contains(".")) {
                throw new InvalidPaymentException("Chave Pix email inválida");
            }
        } else if (pixKey.startsWith("+")) {
            if (pixKey.length() != 14) {
                throw new InvalidPaymentException("Chave Pix telefone inválida");
            }
        } else {
            throw new InvalidPaymentException("Chave Pix inválida");
        }
    }

    @Override
    public void processPayment(BigDecimal amount) {
        validatePayment();
        System.out.println("Pagamento do pix no valor de R$"+ amount +" efetuado com sucesso!");
    }
}
