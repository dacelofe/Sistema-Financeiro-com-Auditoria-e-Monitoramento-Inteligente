const request = require('supertest');
const app = require('../src/app');

describe('3. Extratos Bancários e Posição de Caixa', () => {
  it('Caso 5 (Positivo) - E2E: Usuário da Tesouraria acessa extrato', async () => {
    const res = await request(app)
      .get('/api/treasury/statement')
      .set('x-user-role', 'Tesouraria');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('statement');
  });

  it('Caso 6 (Negativo) - Integração: Usuário comum tenta acessar extrato', async () => {
    const res = await request(app)
      .get('/api/treasury/statement')
      .set('x-user-role', 'Comum');
    
    expect(res.statusCode).toEqual(403);
    expect(res.body.error).toContain('Acesso negado');
  });
});