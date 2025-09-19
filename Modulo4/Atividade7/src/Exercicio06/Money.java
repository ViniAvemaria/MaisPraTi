package Exercicio06;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Money {
    private final BigDecimal amount;
    private final MyCurrency currency;

    public Money(BigDecimal amount, MyCurrency currency) {
        if(amount.compareTo(BigDecimal.ZERO) < 0)  {
            throw new IllegalArgumentException("Valor não pode ser negativo");
        }
        this.amount = amount;
        this.currency = currency;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public MyCurrency getCurrency() {
        return currency;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Money money = (Money) o;
        return amount.compareTo(money.amount) == 0 && currency == money.currency;
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(amount.stripTrailingZeros(), currency);
    }

    public Money add(Money other) {
        if (!this.currency.equals(other.currency)) {
            throw new IllegalArgumentException("Não é permitido a soma de moedas diferentes");
        }
        return new Money(this.amount.add(other.amount), this.currency);
    }

    public Money multiply(BigDecimal quantity) {
        BigDecimal newAmount = this.amount.multiply(quantity);
        newAmount = newAmount.setScale(2, RoundingMode.HALF_EVEN);
        return new Money(newAmount, this.currency);
    }
}
