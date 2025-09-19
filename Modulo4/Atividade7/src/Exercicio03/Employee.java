package Exercicio03;

import java.math.BigDecimal;

public abstract class Employee {
    protected String name;
    protected BigDecimal salary;

    public Employee(String name, BigDecimal salary) {
        if(salary.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Salário não pode ser negativo");
        }
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public abstract BigDecimal calculateBonus();
}
