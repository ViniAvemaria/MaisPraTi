package Exercicio05;

public class InvalidPaymentException extends IllegalArgumentException{
    public InvalidPaymentException(String message) {
        super(message);
    }
}
