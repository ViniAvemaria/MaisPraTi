package Exercicio06;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Product laptop = new Product("Notebook", new Money(new BigDecimal("3500.00"), MyCurrency.BRL));
        Product mouse = new Product("Mouse", new Money(new BigDecimal("150.00"), MyCurrency.BRL));
        Product keyboard = new Product("Teclado", new Money(new BigDecimal("300.00"), MyCurrency.BRL));

        Cart cart = new Cart();

        cart = cart.addItem(new CartItem(laptop, 1));
        cart = cart.addItem(new CartItem(mouse, 2));
        cart = cart.addItem(new CartItem(keyboard, 1));

        System.out.println("Total do carrinho antes do cupom: R$" + cart.getTotal().getAmount());

        cart = cart.applyCoupon(new BigDecimal("0.15"));
        System.out.println("Total do carrinho com 15% de desconto: R$" + cart.getTotal().getAmount());

        cart = cart.removeItem(mouse);
        System.out.println("Total do carrinho depois de remover um item: R$" + cart.getTotal().getAmount());

        System.out.println("----------------------");

        // teste de cupom inválido
        try {
            cart.applyCoupon(new BigDecimal("0.50"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // teste de quantidade inválida
        try {
            new CartItem(laptop, 0);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // teste de dinheiro inválido
        try {
            new Money(new BigDecimal("-100.00"), MyCurrency.BRL);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
