package Exercicio05;

import java.math.BigDecimal;

public class Boleto extends PaymentMethod{
    private final String boletoNumber;

    public Boleto(String boletoNumber) {
        this.boletoNumber = boletoNumber.trim();
    }

    @Override
    public void validatePayment() {
        if(this.boletoNumber.length() != 47 || !this.boletoNumber.matches("\\d+")) {
            throw new IllegalArgumentException("Número de boleto inválido");
        }
    }

    @Override
    public void processPayment(BigDecimal amount) {
        validatePayment();
        System.out.println("Pagamento do boleto no valor de R$"+ amount +" efetuado com sucesso!");
    }
}
