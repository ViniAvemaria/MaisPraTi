package Exercicio06;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Cart {
    private final List<CartItem> items;
    private final BigDecimal couponPercent;

    public Cart() {
        this.items = Collections.emptyList();
        this.couponPercent = BigDecimal.ZERO;
    }

    private Cart(List<CartItem> items, BigDecimal couponPercent) {
        this.items = Collections.unmodifiableList(new ArrayList<>(items));
        this.couponPercent = couponPercent;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public BigDecimal getCouponPercent() {
        return couponPercent;
    }

    public Cart addItem(CartItem item) {
        List<CartItem> newItems = new ArrayList<>(items);
        newItems.add(item);
        return new Cart(newItems, couponPercent);
    }

    public Cart removeItem(Product product) {
        List<CartItem> newItems = new ArrayList<>();
        for (CartItem item : items) {
            if (!item.getProduct().equals(product)) {
                newItems.add(item);
            }
        }
        return new Cart(newItems, couponPercent);
    }

    public Cart applyCoupon(BigDecimal percent) {
        if (percent.compareTo(BigDecimal.ZERO) < 0 || percent.compareTo(new BigDecimal("0.30")) > 0) {
            throw new IllegalArgumentException("Cupom deve ser entre 0% e 30%");
        }
        return new Cart(items, percent);
    }

    public Money getTotal() {
        Money total = new Money(BigDecimal.ZERO, items.isEmpty() ? MyCurrency.BRL :
                items.get(0).getProduct().getPrice().getCurrency());

        for (CartItem item : items) {
            total = total.add(item.getTotalPrice());
        }

        if (couponPercent.compareTo(BigDecimal.ZERO) > 0) {
            total = total.multiply(BigDecimal.ONE.subtract(couponPercent));
        }

        return total;
    }
}
