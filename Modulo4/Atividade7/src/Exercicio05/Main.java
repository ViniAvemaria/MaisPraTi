package Exercicio05;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // teste de número de cartão de crédito válido
        try {
            PaymentMethod ccPayment1 = new CreditCard("1234567891234567");
            ccPayment1.processPayment(new BigDecimal("699.90"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        // teste de número de cartão de crédito inválido
        try {
            PaymentMethod ccPayment2 = new CreditCard("123456");
            ccPayment2.processPayment(new BigDecimal("699.90"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de número de boleto válido
        try {
            PaymentMethod boletoPayment1 = new Boleto("12345678912345678912345678912345678912345678912");
            boletoPayment1.processPayment(new BigDecimal("1375.50"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        // teste de número de boleto inválido
        try {
            PaymentMethod boletoPayment2 = new Boleto("123456");
            boletoPayment2.processPayment(new BigDecimal("1375.50"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de número da chave pix cpf válida
        try {
            PaymentMethod pixPayment1 = new Pix("12345678912");
            pixPayment1.processPayment(new BigDecimal("300"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        // teste de número da chave pix cpf inválida
        try {
            PaymentMethod pixPayment2 = new Pix("123456789");
            pixPayment2.processPayment(new BigDecimal("300"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        // teste de número da chave pix email inválida
        try {
            PaymentMethod pixPayment2 = new Pix("test@emailcom");
            pixPayment2.processPayment(new BigDecimal("300"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }

        // teste de número da chave pix telefone inválida
        try {
            PaymentMethod pixPayment2 = new Pix("+5551123456");
            pixPayment2.processPayment(new BigDecimal("300"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro de pagamento: " + e.getMessage());
        }
    }
}
