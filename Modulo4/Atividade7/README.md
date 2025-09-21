# Curso +PraTi - Atividades do Módulo 4

Este repositório contém os exercícios do módulo de Java, abordando conceitos de orientação a objetos, generics e design patterns.

## Lista de exercícios

- **Exercício 1 — Produto**: Encapsulamento, getters/setters, validação de atributos.
- **Exercício 2 — Produto com Desconto**: Encapsulamento, validação de regras, tratamento de exceções.
- **Exercício 3 — Funcionários**: Herança, sobrescrita de métodos, cálculo de bônus.
- **Exercício 4 — Meios de Transporte**: Interface, polimorfismo, aceleração e frenagem.
- **Exercício 5 — Sistema de Pagamentos**: Abstração, validação, exceções personalizadas, polimorfismo.
- **Exercício 6 — Carrinho de Compras**: Imutabilidade, objetos de valor, operações que retornam novo objeto.
- **Exercício 7 — Repositório Genérico**: Generics, interfaces, implementação em memória, exceções.
- **Exercício 8 — Frete com Strategy**: Padrão Strategy, lambdas, troca de estratégia em tempo de execução, 
  validação de CEP.

## Execução

1. Clone este repositório:

    ```bash
    git clone https://github.com/ViniAvemaria/MaisPraTi.git
    cd Modulo4/Atividade7
    ```
   
2. Compile todos os exercícios:

    ```bash
    javac -d bin src/Exercicio01/*.java src/Exercicio02/*.java src/Exercicio03/*.java src/Exercicio04/*.java src/Exercicio05/*.java src/Exercicio06/*.java src/Exercicio07/*.java src/Exercicio08/*.java
    ```
   
3. Execute o exercício desejado:

    ```bash
    java -cp bin Exercicio01.Main
    ```