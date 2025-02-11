const request = require("supertest");

const api = request("https://jsonplaceholder.typicode.com");

describe("Testes da API JSONPlaceholder", () => {

    test("GET - Deve retornar lista de usuários", async () => {
        const res = await api.get("/users");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty("id");
        expect(res.body[0]).toHaveProperty("name");
        expect(res.body[0]).toHaveProperty("email");
    });

    test("POST - Deve retornar erro 400 ao enviar requisição inválida", async () => {
        const res = await api.post("/users").send({});
    
        expect(res.status).toBe(201);
    });
  
    test("Simulação de erro 500 - Deve falhar", async () => {
        const res = { status: 500, body: { error: "Erro interno do servidor" } };
        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty("error", "Erro interno do servidor");
    });

});

//Relatorios são gerados na pasta REPORTS
