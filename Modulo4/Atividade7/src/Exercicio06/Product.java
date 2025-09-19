package Exercicio06;

public class Product {
    private final String name;
    private final Money price;

    public Product(String name, Money price) {
        if(name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Nome do produto não pode ser vazio ou nulo");
        }

        if(price == null) {
            throw new IllegalArgumentException("Preço do produto não pode ser vazio ou nulo");
        }

        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public Money getPrice() {
        return price;
    }
}
