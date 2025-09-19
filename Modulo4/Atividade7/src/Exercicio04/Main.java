package Exercicio04;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeanTransport> transportList = new ArrayList<>();
        transportList.add(new Car());
        transportList.add(new Train());
        transportList.add(new Bicycle());

        // teste dos métodos accelerate e brake válidos
        try {
            for(IMeanTransport transport : transportList) {
                transport.accelerate();
                transport.accelerate();
                transport.brake();
                System.out.println();
            }
        } catch (IllegalStateException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de accelerate inválido
        try {
            for(IMeanTransport transport : transportList) {
                while(true) {
                    transport.accelerate();
                }
            }
        } catch (IllegalStateException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        System.out.println("----------------------");

        // teste de brake inválido
        try {
            for(IMeanTransport transport : transportList) {
                while(true) {
                    transport.brake();
                }
            }
        } catch (IllegalStateException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
