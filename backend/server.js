const express = require('express');
const app = express();
const PORT = 3000;

// Rota de status geral
app.get('/api/status', (req, res) => {
    console.log(`[LOG] Requisição recebida em /api/status - ${new Date().toISOString()}`);
    res.json({ status: 'online', message: 'API do FinGestão operando normalmente.' });
});

// Simulação de rota de boletos
app.get('/api/boletos', (req, res) => {
    console.log(`[LOG] Acessando módulo de boletos - ${new Date().toISOString()}`);
    res.json({ boletosPendentes: 15430.00, quantidade: 12 });
});

app.listen(PORT, () => {
    console.log(`[START] Servidor Backend rodando na porta ${PORT}`);
    console.log(`[START] Banco de dados (simulado) conectado com sucesso.`);
});