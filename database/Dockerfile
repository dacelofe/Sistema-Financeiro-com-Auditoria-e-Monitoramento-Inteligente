# Usa a imagem oficial do PostgreSQL na versão 15 (versão leve alpine)
FROM postgres:15-alpine

# Define as variáveis de ambiente (usuário, senha e nome do banco)
# Nota: Em um sistema real de produção, a senha não deve ficar exposta aqui, 
# mas para o nosso ambiente de desenvolvimento local, isso facilita muito.
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=senha123
ENV POSTGRES_DB=fingestao

# Copia nosso arquivo SQL para a pasta de inicialização automática do Postgres
COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão do PostgreSQL
EXPOSE 5432