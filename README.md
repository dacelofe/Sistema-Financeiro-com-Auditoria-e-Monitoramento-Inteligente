# 💰 Sistema Financeiro com Auditoria e Monitoramento Inteligente

## 📌 Visão Geral

Este projeto consiste no desenvolvimento de um sistema financeiro corporativo com foco em **controle, rastreabilidade, governança e detecção de anomalias**.

A solução foi projetada para garantir maior segurança nas operações financeiras, oferecendo mecanismos robustos de auditoria, controle de acesso e monitoramento inteligente — sem comprometer a fluidez operacional.

---

## 🎯 Objetivos

* Garantir **rastreabilidade completa** das operações financeiras
* Aplicar **regras de governança e compliance**
* Restringir acessos com base em perfis (RBAC)
* Detectar **anomalias e padrões suspeitos**
* Fornecer **visão consolidada do fluxo de caixa**

---

## 🧩 Funcionalidades do Sistema

### 🔍 1. Portal de Auditoria

Permite acesso a:

* Logs de operações
* Comprovantes
* Trilhas de aprovação

#### Regras de Negócio

* Acesso restrito a perfis autorizados (Auditoria, Compliance, Gestão)
* Logs são **imutáveis** (não podem ser alterados ou excluídos)
* Todas as ações relevantes devem ser registradas
* Cada transação deve possuir trilha de aprovação completa
* Comprovantes devem estar vinculados às transações

---

### 💳 2. Cadastro de Pagamentos

Permite o registro de pagamentos com vínculo obrigatório.

#### Regras de Negócio

* Todo pagamento deve estar vinculado a:

  * Nota Fiscal **ou**
  * Contrato válido
* Não é permitido cadastro sem vínculo
* O valor do pagamento não pode exceder o documento vinculado
* O documento deve estar aprovado/ativo

---

### 🏦 3. Controle de Extratos e Caixa

Gerenciamento de:

* Extratos bancários
* Posição de caixa

#### Regras de Negócio

* Acesso restrito a Tesouraria e Gestão
* Controle baseado em perfil (RBAC)
* Dados devem estar atualizados conforme conciliação
* Exportação restrita por permissão

---

### 📊 4. Dashboard de Fluxo de Caixa

Exibe visão consolidada dos dados financeiros.

#### Regras de Negócio

* Dados exibidos devem respeitar o perfil do usuário
* Informações são **pré-filtradas** (não expõe dados brutos)
* Atualização pode ser em tempo real ou batch
* Não permite acesso direto a dados sensíveis

---

### 🚨 5. Motor de Alertas e Anomalias

Responsável por identificar comportamentos suspeitos.

#### Regras de Negócio

* Detecta padrões como:

  * Pagamentos duplicados
  * Valores fora do padrão
  * Transações em horários incomuns
* **Não bloqueia operações**
* Apenas gera alertas e notificações
* Mantém histórico de alertas

---


---
