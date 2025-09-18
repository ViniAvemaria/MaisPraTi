package Exercicio02;

public class InvalidDiscountException extends IllegalArgumentException{
    public InvalidDiscountException(String message) {
        super(message);
    }
}
