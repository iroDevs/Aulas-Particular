# Docs

## Endpoint - /funcionarios

> GET: /funcionarios

- Returns:
- status code: 200
```json
[
    {
        "id": 1,
        "nome": "Maria Silva",
        "email": "maria.silva@example.com",
        "telefone": "1234567890",
        "cpf": "123.456.789-00",
        "cep": "12345-678",
        "cidade": "São Paulo",
        "estado": "SP",
        "cargo": "Desenvolvedora",
        "salario": "8500.5",
        "curriculo": "link_para_curriculo.pdf",
        "ensino_medio": true,
        "ensino_superior": true,
        "pos_graduacao": false,
        "mestrado": false,
        "nota_teste": "92.5",
        "nota_entrevista": "88.3"
    },
    ...
]

```

> GET: /funcionarios/{id}

- Returns:
- status code: 200
```json
{
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria.silva@example.com",
    "telefone": "1234567890",
    "cpf": "123.456.789-00",
    "cep": "12345-678",
    "cidade": "São Paulo",
    "estado": "SP",
    "cargo": "Desenvolvedora",
    "salario": "8500.5",
    "curriculo": "link_para_curriculo.pdf",
    "ensino_medio": true,
    "ensino_superior": true,
    "pos_graduacao": false,
    "mestrado": false,
    "nota_teste": "92.5",
    "nota_entrevista": "88.3"
}

```

OR
- status code: 404
```json
{
    "message": "Funcionário não encontrado"
}
```

> POST: /funcionarios

- Body:
```json
{
  "nome": "Daniela Barros",
  "email": "daniela.barros@example.com",
  "telefone": "6677889900",
  "cpf": "456.789.123-00",
  "cep": "12345-678",
  "cidade": "João Pessoa",
  "estado": "PB",
  "cargo": "Analista Financeiro",
  "salario": 7500.75,
  "curriculo": "link_para_curriculo_daniela.pdf",
  "ensino_medio": true,
  "ensino_superior": true,
  "pos_graduacao": true,
  "mestrado": false,
  "nota_teste": 84.5,
  "nota_entrevista": 85.0
}
```

- Returns:
- status code: 201
```json
{
    "id": 23,
    "nome": "Daniela Barros",
    "email": "daniela.barros@example.com",
    "telefone": "6677889900",
    "cpf": "456.789.123-00",
    "cep": "12345-678",
    "cidade": "João Pessoa",
    "estado": "PB",
    "cargo": "Analista Financeiro",
    "salario": "7500.75",
    "curriculo": "link_para_curriculo_daniela.pdf",
    "ensino_medio": true,
    "ensino_superior": true,
    "pos_graduacao": true,
    "mestrado": false,
    "nota_teste": "84.5",
    "nota_entrevista": "85"
}
```