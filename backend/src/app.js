const express = require('express');
const app = express();

// Permite que o Express entenda requisições com corpo em JSON
app.use(express.json());


const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];
        if (!userRole || !allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: 'Acesso negado: Perfil sem permissão.' });
        }
        next();
    };
};


app.get('/api/status', (req, res) => {
    console.log(`[LOG] Requisição recebida em /api/status - ${new Date().toISOString()}`);
    res.json({ status: 'online', message: 'API do FinGestão operando normalmente.' });
});

app.get('/api/boletos', (req, res) => {
    console.log(`[LOG] Acessando módulo de boletos - ${new Date().toISOString()}`);
    res.json({ boletosPendentes: 15430.00, quantidade: 12 });
});


app.get('/api/audit/logs', checkRole(['Auditoria', 'Compliance', 'Gestao']), (req, res) => {
    const trilhaDeLogs = [
        { acao: 'Criação', documento: 'NF-1029', data: '2026-05-24T10:00:00Z', aprovadoPor: 'admin' },
        { acao: 'Aprovação', documento: 'PGT-992', data: '2026-05-25T14:30:00Z', aprovadoPor: 'gestor_fin' }
    ];
    res.status(200).json({ logs: trilhaDeLogs });
});


app.post('/api/payments', (req, res) => {
    const { nf_id, valor_pagamento, valor_documento, status_documento } = req.body;
    
    if (!nf_id) {
        return res.status(400).json({ error: 'Erro de validação: Pagamento sem NF ou contrato vinculado.' });
    }
    if (status_documento !== 'ativo') {
        return res.status(400).json({ error: 'Erro de validação: Documento inativo ou não aprovado.' });
    }
    if (valor_pagamento > valor_documento) {
        return res.status(400).json({ error: 'Erro de validação: O valor do pagamento excede o documento.' });
    }
    
    res.status(201).json({ message: 'Pagamento registrado com sucesso.' });
});


app.get('/api/treasury/statement', checkRole(['Tesouraria', 'Gestao']), (req, res) => {
    res.status(200).json({ 
        statement: 'Extrato consolidado da última conciliação bancária.',
        saldo: 1500000.00
    });
});


app.get('/api/dashboard', (req, res) => {
    const userRole = req.headers['x-user-role'];
    
    if (!userRole) {
        return res.status(403).json({ error: 'Acesso negado: Perfil não informado.' });
    }

    // Filtra os dados retornados de acordo com o perfil
    if (userRole === 'Gestao' || userRole === 'Tesouraria') {
        return res.status(200).json({ data: 'Dados consolidados - Visão Global e Estratégica' });
    } else if (userRole === 'Operacional') {
        return res.status(200).json({ data: 'Dados consolidados - Visão Restrita da Operação' });
    }
    
    // Se o perfil não estiver nas condicionais acima, bloqueia
    return res.status(403).json({ error: 'Acesso negado: Perfil sem permissão para visualização de dashboard.' });
});

// Exporta o app para o Jest e para o server.js
module.exports = app;kRole = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.headers['x-user-role'];
        if (!userRole || !allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: 'Acesso negado: Perfil sem permissão.' });
        }
        next();
    };
};


app.get('/api/status', (req, res) => {
    console.log(`[LOG] Requisição recebida em /api/status - ${new Date().toISOString()}`);
    res.json({ status: 'online', message: 'API do FinGestão operando normalmente.' });
});

app.get('/api/boletos', (req, res) => {
    console.log(`[LOG] Acessando módulo de boletos - ${new Date().toISOString()}`);
    res.json({ boletosPendentes: 15430.00, quantidade: 12 });
});


app.get('/api/audit/logs', checkRole(['Auditoria', 'Compliance', 'Gestao']), (req, res) => {
    console.log(`[LOG] Acessando trilha de auditoria - ${new Date().toISOString()}`);
    
    // Simulação de logs imutáveis e trilha de aprovação
    const trilhaDeLogs = [
        { acao: 'Criação', documento: 'NF-1029', data: '2026-05-24T10:00:00Z', aprovadoPor: 'admin' },
        { acao: 'Aprovação', documento: 'PGT-992', data: '2026-05-25T14:30:00Z', aprovadoPor: 'gestor_fin' }
    ];

    res.status(200).json({ logs: trilhaDeLogs });
});

// Exporta o 'app' sem iniciar a porta (ideal para os testes)
module.exports = app;