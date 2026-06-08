# 🚀 Simulador de CPU com Pipeline

Projeto desenvolvido em React com o objetivo de simular o funcionamento básico de uma CPU moderna, demonstrando visualmente a execução de instruções Assembly, registradores, memória RAM e pipeline de instruções.

---

# 📌 Objetivo

O projeto foi criado para representar de forma didática como uma CPU executa instruções, permitindo visualizar:

- Registradores
- Memória RAM
- Contador de Programa (PC)
- Pipeline de execução
- Instruções Assembly
- Ciclos de clock

O sistema foi desenvolvido com foco educacional para auxiliar no aprendizado de Arquitetura de Computadores.

---

# 🖥️ Funcionalidades

## Registradores

A CPU possui quatro registradores:

- R0
- R1
- R2
- R3

Os valores armazenados podem ser visualizados em tempo real durante a execução das instruções.

---

## Program Counter (PC)

O contador de programa indica qual instrução está sendo processada pela CPU.

O PC é atualizado automaticamente a cada ciclo de clock.

---

## Memória RAM

A memória RAM é representada visualmente na interface.

Possui 8 posições:

- RAM[0]
- RAM[1]
- RAM[2]
- RAM[3]
- RAM[4]
- RAM[5]
- RAM[6]
- RAM[7]

A RAM armazena:

- Valores gravados através da instrução STORE
- Resultados das operações executadas pela CPU

---

## Pipeline de CPU

O simulador implementa um pipeline simplificado com quatro estágios:

### FETCH
Busca da instrução na memória de programa.

### DECODE
Decodificação da instrução Assembly.

### EXECUTE
Execução da operação.

### WRITEBACK
Escrita do resultado nos registradores ou memória.

---

## Montador Visual

O usuário pode criar programas sem digitar código manualmente.

Através do montador visual é possível selecionar:

### Operações

- MOV
- ADD
- SUB
- STORE
- LOAD

### Registradores

- R0
- R1
- R2
- R3

### Valores

Valores numéricos ou registradores dependendo da operação escolhida.

---

# ⚙️ Instruções Implementadas

## MOV

Move um valor para um registrador.

Exemplo:

```assembly
MOV R1, 20
```

Resultado:

```text
R1 = 20
```

---

## ADD

Soma valores entre registradores.

Exemplo:

```assembly
ADD R1, R2
```

Resultado:

```text
R1 = R1 + R2
```

---

## SUB

Subtrai valores entre registradores.

Exemplo:

```assembly
SUB R1, R2
```

Resultado:

```text
R1 = R1 - R2
```

---

## STORE

Armazena um valor de registrador na memória RAM.

Exemplo:

```assembly
STORE R1, 0
```

Resultado:

```text
RAM[0] = R1
```

---

## LOAD

Carrega um valor da RAM para um registrador.

Exemplo:

```assembly
LOAD R2, 0
```

Resultado:

```text
R2 = RAM[0]
```

---

# ▶️ Modos de Execução

## Carregar Programa

Converte as instruções criadas no montador visual para o formato utilizado pela CPU.

## Próximo Ciclo

Executa apenas um ciclo de clock.

Permite acompanhar o pipeline passo a passo.

## Executar Automático

Executa continuamente até o término do programa.

## Resetar

Reinicia:

- Registradores
- RAM
- Pipeline
- Program Counter

---

# 🏗️ Estrutura do Projeto

```text
src
│
├── components
│   ├── Registers.jsx
│   ├── Memory.jsx
│   ├── PipelineView.jsx
│   └── Controls.jsx
│
├── cpu
│   ├── cpu.js
│   ├── instructions.js
│   ├── parser.js
│   └── pipeline.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# 🧠 Conceitos Demonstrados

O simulador aborda diversos conceitos de Arquitetura de Computadores:

- Registradores
- Pipeline
- Ciclo de Clock
- Program Counter
- Unidade de Controle
- Memória RAM
- Instruções Assembly
- Busca de Instruções
- Decodificação
- Execução
- Escrita de Resultados

---

# 🛠️ Tecnologias Utilizadas

- React
- JavaScript
- Vite
- CSS3

---

# 📖 Exemplo de Programa

```assembly
MOV R1, 20
MOV R2, 30
ADD R1, R2
STORE R1, 0
LOAD R3, 0
```

Resultado esperado:

```text
R1 = 50
R2 = 30
R3 = 50

RAM[0] = 50
```

---

# 👨‍💻 Autores

Projeto desenvolvido para a disciplina de Arquitetura de Computadores com o objetivo de demonstrar visualmente o funcionamento interno de uma CPU utilizando pipeline e execução de instruções Assembly.
