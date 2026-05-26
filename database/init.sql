-- Criação da tabela de Boletos de Cobrança
CREATE TABLE boletos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data_vencimento DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDENTE'
);

-- Criação da tabela de Pagamentos a Fornecedores
CREATE TABLE fornecedores_pagamentos (
    id SERIAL PRIMARY KEY,
    nome_fornecedor VARCHAR(100) NOT NULL,
    valor_pagamento DECIMAL(10, 2) NOT NULL,
    data_agendamento DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'AGENDADO'
);

-- Inserindo alguns dados de teste (opcional, apenas para não nascer vazio)
INSERT INTO boletos (descricao, valor, data_vencimento, status) 
VALUES ('Cliente A - Mensalidade', 1500.00, '2026-05-10', 'PENDENTE');

INSERT INTO fornecedores_pagamentos (nome_fornecedor, valor_pagamento, data_agendamento, status) 
VALUES ('Empresa de Limpeza', 850.00, '2026-05-05', 'AGENDADO');