const request = require('supertest');
const app = require('../src/app');

describe('4. Dashboard de Fluxo de Caixa', () => {
  it('Caso Positivo - Integração: Dashboard respeita filtro por perfil (Gestão)', async () => {
    const res = await request(app)
      .get('/api/dashboard')
      .set('x-user-role', 'Gestao');
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.data).toBe('Dados consolidados - Visão Global e Estratégica');
  });

  it('Caso Negativo - E2E: Usuário tenta visualizar dados fora do escopo', async () => {
    const res = await request(app)
      .get('/api/dashboard')
      .set('x-user-role', 'Estagiario');
    
    expect(res.statusCode).toEqual(403);
    expect(res.body.error).toContain('sem permissão');
  });
});