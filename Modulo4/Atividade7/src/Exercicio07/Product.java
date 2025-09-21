package Exercicio07;

public class Product implements Identifiable<Integer> {
    private final Integer id;
    private final String name;
    private final double price;

    public Product(Integer id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    @Override
    public Integer getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public double getPrice() {
        return this.price;
    }
}
