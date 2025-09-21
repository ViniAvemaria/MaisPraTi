package Exercicio07;

public class Employee implements Identifiable<String> {
    private final String id;
    private final String name;
    private final String position;

    public Employee(String id, String name, String position) {
        this.id = id;
        this.name = name;
        this.position = position;
    }

    @Override
    public String getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getPosition() {
        return this.position;
    }
}
