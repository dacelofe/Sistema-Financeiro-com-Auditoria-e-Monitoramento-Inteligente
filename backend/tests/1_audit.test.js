const request = require('supertest');
const app = require('../src/app'); // Importa a nossa aplicação sem ligar a porta

describe('1. Portal de Auditoria', () => {
    
  it('Caso 1 (Positivo) - E2E: Usuário com permissão válida acessa logs', async () => {
    // Simulamos uma requisição GET enviando o perfil 'Auditoria' no cabeçalho
    const res = await request(app)
      .get('/api/audit/logs')
      .set('x-user-role', 'Auditoria');
    
    // O resultado esperado é sucesso (200) e o retorno completo dos logs
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('logs');
    expect(res.body.logs.length).toBe(2); // Verifica se trouxe os 2 logs simulados
  });

  it('Caso 2 (Negativo) - Integração: Usuário comum tenta acessar logs', async () => {
    // Simulamos uma requisição GET enviando o perfil 'Comum'
    const res = await request(app)
      .get('/api/audit/logs')
      .set('x-user-role', 'Comum');
    
    // O resultado esperado é erro de acesso negado (403)
    expect(res.statusCode).toEqual(403);
    expect(res.body.error).toContain('Acesso negado');
  });

});