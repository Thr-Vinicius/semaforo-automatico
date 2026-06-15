# 🚦 Semáforo Automático

Projeto desenvolvido como atividade prática utilizando **HTML, CSS e JavaScript**, aplicando a mesma base do projeto **Lâmpada Interativa**, porém evoluindo a lógica para um sistema automático de troca de estados.

O objetivo do projeto é simular um semáforo que altera suas cores automaticamente a cada 3 segundos, utilizando JavaScript para manipulação dinâmica da página.

---

## 📌 Sobre o Projeto

O projeto apresenta um painel visual contendo um semáforo que alterna entre os três estados:

- 🔴 Vermelho
- 🟢 Verde
- 🟡 Amarelo

Diferente da Lâmpada Interativa, onde a alteração acontecia por meio de um clique do usuário, neste projeto a troca acontece automaticamente através de um temporizador.

A cada intervalo definido, o JavaScript altera a imagem exibida, simulando o funcionamento de um semáforo real.

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento foram aplicados conceitos como:

- estruturação de páginas com HTML;
- estilização com CSS;
- Box Model: margin, padding, border e border-radius;
- Flexbox para organização do layout;
- manipulação do DOM com JavaScript;
- funções em JavaScript;
- arrays para armazenar estados;
- controle de tempo com setInterval;
- versionamento com Git e GitHub.

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

## 🚀 Como Utilizar

1. Abra o projeto no navegador.
2. O semáforo iniciará na cor vermelha.
3. Aguarde 3 segundos.
4. O sistema trocará automaticamente para a próxima cor.
5. O ciclo continuará repetindo.

---

## 📁 Estrutura do Projeto

```text
semaforo-automatico/
├── img/
│   ├── vermelho.png
│   ├── amarelo.png
│   └── verde.png
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ Funcionamento

O JavaScript possui um array contendo todas as fases do semáforo:

```javascript
[
 "vermelho",
 "verde",
 "amarelo"
]
```

A função de troca é executada automaticamente a cada 3 segundos utilizando:

```javascript
setInterval()
```

Esse método permite repetir uma ação em intervalos definidos de tempo.

---

## 📚 Observação

Este projeto foi desenvolvido com fins educacionais, praticando desenvolvimento web, lógica de programação, manipulação de elementos HTML e versionamento de código.
