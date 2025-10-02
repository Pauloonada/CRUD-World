# 📖 Dicionário de Dados - CRUD WORLD

Este documento descreve a estrutura do banco de dados utilizado no sistema **CRUD WORLD**.

---

## 🗺️ Tabela: `paises`

| Campo             | Tipo            | PK  | FK  | Nulo | Descrição                              |
|-------------------|-----------------|-----|-----|------|----------------------------------------|
| id                | INT4 IDENTITY   | PK  |     | NÃO  | Identificador único do país            |
| nome_oficial      | VARCHAR(100)    |     |     | NÃO  | Nome oficial do país                   |
| continente        | VARCHAR(45)     |     |     | NÃO  | Continente ao qual o país pertence     |
| populacao         | INT4            |     |     | NÃO  | População estimada                     |
| idioma_principal  | VARCHAR(45)     |     |     | NÃO  | Idioma principal falado no país        |

---

## 🏙️ Tabela: `cidades`

| Campo     | Tipo            | PK  | FK             | Nulo | Descrição                              |
|-----------|-----------------|-----|----------------|------|----------------------------------------|
| id        | INT4 IDENTITY   | PK  |                | NÃO  | Identificador único da cidade          |
| nome      | VARCHAR(100)    |     |                | NÃO  | Nome da cidade                         |
| populacao | INT4            |     |                | NÃO  | População da cidade                    |
| id_pais   | INT4            |     | FK → paises.id | NÃO  | País ao qual a cidade está vinculada   |

---

📌 **Observações**
- Todas as tabelas usam **chaves primárias numéricas sequenciais** (`IDENTITY`).  
- A tabela `cidades` possui relacionamento **N:1** com `paises`.  
- Todos os campos são **NOT NULL**.  
