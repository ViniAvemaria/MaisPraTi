package Exercicio04;

public class Car implements IMeanTransport {
    private int speed;
    private final int speedLimit;

    public Car() {
        this.speed = 0;
        this.speedLimit = 180;
    }

    @Override
    public void accelerate() {
        if(this.speed < this.speedLimit) {
            this.speed += 10;
            System.out.println("Carro acelerando, velocidade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Carro não pode passar do limite de velocidade");
        }
    }

    @Override
    public void brake() {
        if(this.speed > 0) {
            this.speed -= 10;
            System.out.println("Carro freando, velodicade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Carro já está parado");
        }
    }
}
