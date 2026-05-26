const app = require('./src/app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`[START] Servidor Backend rodando na porta ${PORT}`);
    console.log(`[START] Banco de dados (simulado) conectado com sucesso.`);
});