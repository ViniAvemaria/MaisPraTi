package Exercicio04;

public class Bicycle implements IMeanTransport{
    private int speed;
    private final int speedLimit;

    public Bicycle() {
        this.speed = 0;
        this.speedLimit = 30;
    }

    @Override
    public void accelerate() {
        if(this.speed < this.speedLimit) {
            this.speed += 5;
            System.out.println("Bicicleta acelerando, velocidade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Bicicleta não pode passar do limite de velocidade");
        }
    }

    @Override
    public void brake() {
        if(this.speed > 0) {
            this.speed -= 5;
            System.out.println("Bicicleta freando, velodicade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Bicicleta já está parada");
        }
    }
}
