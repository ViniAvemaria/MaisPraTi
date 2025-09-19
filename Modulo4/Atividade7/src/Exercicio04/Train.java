package Exercicio04;

public class Train implements IMeanTransport{
    private int speed;
    private final int speedLimit;

    public Train() {
        this.speed = 0;
        this.speedLimit = 350;
    }

    @Override
    public void accelerate() {
        if(this.speed < this.speedLimit) {
            this.speed += 50;
            System.out.println("Trem acelerando, velocidade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Trem não pode passar do limite de velocidade");
        }
    }

    @Override
    public void brake() {
        if(this.speed > 0) {
            this.speed -= 50;
            System.out.println("Trem freando, velodicade atual: " + this.speed);
        } else {
            throw new IllegalStateException("Trem já está parado");
        }
    }
}
