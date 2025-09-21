package Exercicio07;

public class Main {
    public static void main(String[] args) {
        IRepository<Product, Integer> repoProducts = new InMemoryRepository<>();
        IRepository<Employee, String> repoEmployees = new InMemoryRepository<>();

        repoProducts.save(new Product(1, "Teclado", 150));
        repoProducts.save(new Product(2, "Mouse", 50));

        repoEmployees.save(new Employee("F1", "Ana", "Desenvolvedora"));
        repoEmployees.save(new Employee("F2", "Carlos", "Gerente"));

        System.out.println("Produtos:");
        for(Product product : repoProducts.getAll()) {
            System.out.println(product.getId() + ", " + product.getName() + ", " + product.getPrice());

        }

        System.out.println("\nFuncionários:");
        for(Employee employee : repoEmployees.getAll()) {
            System.out.println(employee.getId() + ", " + employee.getName() + ", " + employee.getPosition());
        }

        // teste para remover um ID válido
        try {
            repoProducts.remove(2);
            System.out.println("\nEntidade removida com sucesso!\n");
            System.out.println("Produtos:");
            for(Product product : repoProducts.getAll()) {
                System.out.println(product.getId() + ", " + product.getName() + ", " + product.getPrice());

            }
        } catch (EntityNotFoundException e) {
            System.out.println("\nErro: " + e.getMessage());
        }

        // teste para remover um ID inválido
        try {
            repoProducts.remove(99);
        } catch (EntityNotFoundException e) {
            System.out.println("\nErro: " + e.getMessage());
        }
    }
}
