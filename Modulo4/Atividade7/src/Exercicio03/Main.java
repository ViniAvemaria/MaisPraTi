package Exercicio03;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("Bob", new BigDecimal(6000));
        Employee developer = new Developer("Tom", new BigDecimal(3500));

        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(manager);
        employeeList.add(developer);

        for(Employee employee : employeeList) {
            System.out.println("Nome: " + employee.getName());
            System.out.println("Salário: R$" + employee.getSalary());
            System.out.println("Bônus: R$" + employee.calculateBonus() + "\n");
        }
    }
}
