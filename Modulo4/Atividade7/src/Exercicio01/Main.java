package Exercicio01;

public class Main {
    public static void displayProductInfo(Product product) {
        System.out.println("Produto: " + product.getName());
        System.out.println("Preço: " + product.getPrice());
        System.out.println("Quantidade: " + product.getQuantity());
    }

    public static void main(String[] args) {

        // teste de produto válido
        try {
            Product product1 = new Product("Teclado", 150.99, 5);
            displayProductInfo(product1);
        } catch (Exception e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de produto com nome inválido
        try {
            Product product2 = new Product(null, 65, 44);
            displayProductInfo(product2);
        } catch (Exception e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de produto com preço inválido
        try {
            Product product2 = new Product("Monitor", -10, 21);
            displayProductInfo(product2);
        } catch (Exception e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de produto com quantidade em estoque inválida
        try {
            Product product2 = new Product("Mesa", 250, -50);
            displayProductInfo(product2);
        } catch (Exception e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }
    }
}
