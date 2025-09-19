package Exercicio02;

import Exercicio01.Product;

public class Main {
    public static void main(String[] args) {

        // teste de desconto válido
        try {
            Product product1 = new Product("Teclado", 150, 50);
            System.out.println("Preço sem desconto: " + product1.getPrice());
            product1.applyDiscount(35);
            System.out.println("Preço com desconto: " + product1.getPrice());
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de desconto inválido
        try {
            Product product1 = new Product("Teclado", 150, 50);
            System.out.println("Preço sem desconto: " + product1.getPrice());
            product1.applyDiscount(60);
            System.out.println("Preço com desconto: " + product1.getPrice());
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao aplicar desconto: " + e.getMessage());
        }
    }
}
