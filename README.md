# Projeto React - Migração do protótipo (Sprint 3)

Migração do protótipo HTML/CSS/JS (login, cadastro, home e ideias) para
React, com estrutura de componentes pai/filho, roteamento, `localStorage`
para persistência de usuário/senha e uso de `Math` para cálculos e
randomização.

## Tecnologias utilizadas

- React 18
- Vite
- React Router DOM
- JavaScript (localStorage, Math)
- CSS3

## Como instalar as dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

O terminal vai exibir o endereço local (geralmente `http://localhost:5173`).

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Usuários e senha para teste

Não há um usuário fixo pré-cadastrado. O cadastro é livre:

1. Acesse `/cadastro` e crie um usuário (mínimo 3 caracteres) e uma senha
   (mínimo 8 caracteres).
2. Depois, acesse `/login` com as mesmas credenciais.

Os dados ficam salvos no `localStorage` do navegador utilizado.

## Uso de IA no projeto

Utilizamos uma IA (Claude, da Anthropic) como apoio no processo de migração
do protótipo original em HTML/CSS/JS para a estrutura de componentes React,
ajudando a planejar a divisão entre componentes pai e filho, a converter a
lógica de manipulação direta do DOM (login/cadastro/logout) para o padrão
de estado do React (`useState`/`useEffect`) mantendo o `localStorage`, e a
revisar a estrutura final do código antes da entrega.

## Github

Link do repositório no Github: **[https://github.com/dev-salvador/sprint-3-js]**

## Deploy

Link do deploy na Vercel: **[sprint-3-js-six.vercel.app]**

## Estrutura de pastas

```
src/
├── components/   → Header, Footer, CardIdeia, MembroGrupo, ImagensOrbitando
├── pages/        → Home, Login, Cadastro, CameraContextual
├── assets/       → imagens e fontes
├── styles/       → styles.css
├── App.jsx
└── main.jsx
```
