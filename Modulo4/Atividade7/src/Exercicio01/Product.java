package Exercicio01;

import Exercicio02.InvalidDiscountException;

public class Product {
    private String name;
    private double price;
    private int quantity;

    public Product(String name, double price, int quantity) {
        setName(name);
        setPrice(price);
        setQuantity(quantity);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if(name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        if(price < 0) {
            throw new IllegalArgumentException("Preço deve ser maior ou igual a zero.");
        }
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        if(quantity < 0) {
            throw new IllegalArgumentException("Quantidade em estoque deve ser maior ou igual a zero.");
        }
        this.quantity = quantity;
    }

    public void applyDiscount(double percentage) {
        if(percentage < 0 || percentage > 50) {
            throw new InvalidDiscountException("Desconto deve ser entre 0 e 50%");
        }
        double discount = price * (percentage / 100);
        this.price -= discount;
    }
}
