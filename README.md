# 🌍 Sistema de Gerenciamento de Países e Cidades  - CRUD WORLD

Aplicação web completa desenvolvida em **HTML, CSS, JavaScript, PHP e PostgreSQL**, com foco no gerenciamento de dados geográficos.  
O sistema permite cadastrar, consultar, editar e excluir **países e cidades**, garantindo integridade dos dados e integração com APIs externas para enriquecer as informações.  

Hospedagem no **Railway**, tanto do **site (PHP + Front End)** quanto do **banco de dados (PostgreSQL)**.  
Gerenciamento e consultas ao banco também podem ser feitas via **DBeaver**.  

---

## 🚀 Funcionalidades  

- **CRUD de Países**  
  - Inserir, listar, editar e excluir países.  
  - Dados: Nome oficial, continente, população e idioma.  

- **CRUD de Cidades**  
  - Inserir, listar, editar e excluir cidades vinculadas a um país existente.  
  - Dados: Nome, população e país (chave estrangeira).  

- **Validações no Front End (JavaScript)**  
  - Campos obrigatórios.  
  - Confirmação de exclusão.  

- **APIs Externas**  
  - [REST Countries](https://restcountries.com/) → bandeira, capital, moeda etc.  
  - [OpenWeatherMap](https://openweathermap.org/) → clima em tempo real das cidades cadastradas.  

- **Extras** (opcional)  
  - Pesquisa dinâmica de países/cidades.  
  - Estatísticas: cidade mais populosa, número de cidades por continente etc.  

---

## 🛠️ Tecnologias Utilizadas  

- **Front End**: HTML5, CSS3, JavaScript  
- **Back End**: PHP  
- **Banco de Dados**: PostgreSQL  
- **Gerenciador de Banco**: DBeaver  
- **APIs**: REST Countries, OpenWeatherMap  
- **Hospedagem**: Railway  

---

## 📂 Estrutura de Pastas  (Placeholder)

```bash
projeto/
│
├── src/
│   ├── app/                  # Backend (PHP)
│   │   ├── config/           # Configurações (db, env, etc.)
│   │   │   └── conexao.php
│   │   ├── controllers/      # Lógica de controle
│   │   │   ├── PaisController.php
│   │   │   └── CidadeController.php
│   │   ├── models/           # Modelos (ORM/manual)
│   │   │   ├── Pais.php
│   │   │   └── Cidade.php
│   │   ├── routes/           # Rotas da API
│   │   │   ├── paises.php
│   │   │   └── cidades.php
│   │   └── utils/            # Funções auxiliares
│   │       └── helpers.php
│   │
│   ├── web/                  # Frontend Web (HTML/CSS/JS)
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── scripts.js
│   │   ├── index.html
│   │   ├── paises.html
│   │   └── cidades.html
│   │
│   └── mobile/               # Aplicativo Mobile
│       ├── assets/           # Imagens, fontes, ícones
│       ├── src/
│       │   ├── components/   # Componentes reutilizáveis
│       │   ├── screens/      # Telas (Países, Cidades, etc.)
│       │   ├── contexts/     # Context API (se usar React Native)
│       │   ├── services/     # API calls (consumindo backend PHP)
│       │   └── App.js
│       ├── app.json
│       ├── package.json
│       └── README.md
│
├── database/
│   ├── bd_mundo.sql
│   └── seeds.sql
│
├── public/                   # Raiz exposta (backend online)
│   ├── assets/
│   └── index.php
│
├── .env.example
├── .gitignore
├── README.md
└── composer.json


```

---

## 📌 Autor

- **Pedro Pereira**
- Projeto acadêmico de Desenvolvimento Web/Mobile
