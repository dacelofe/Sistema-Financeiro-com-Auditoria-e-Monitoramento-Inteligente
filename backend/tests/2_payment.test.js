const request = require('supertest');
const app = require('../src/app');

describe('2. Cadastro de Pagamentos', () => {
    
  it('Caso 3 (Positivo) - Unitário: Cadastro de pagamento com NF válida', async () => {
    // Montamos um corpo de requisição (payload) perfeito, respeitando as regras
    const payload = {
      nf_id: 'NF-9988',
      valor_pagamento: 1500.00,
      valor_documento: 1500.00,
      status_documento: 'ativo'
    };

    const res = await request(app)
      .post('/api/payments')
      .send(payload); // O supertest envia o JSON para a rota
    
    // Esperamos que crie com sucesso (Status 201)
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Pagamento registrado com sucesso.');
  });

  it('Caso 4 (Negativo) - Unitário: Cadastro de pagamento sem vínculo', async () => {
    // Montamos um payload faltando propositalmente o "nf_id"
    const payload = {
      valor_pagamento: 500.00,
      valor_documento: 500.00,
      status_documento: 'ativo'
    };

    const res = await request(app)
      .post('/api/payments')
      .send(payload);
    
    // Esperamos que bloqueie a ação (Status 400 - Bad Request)
    expect(res.statusCode).toEqual(400);
    expect(res.body.error).toContain('Pagamento sem NF ou contrato vinculado');
  });

});