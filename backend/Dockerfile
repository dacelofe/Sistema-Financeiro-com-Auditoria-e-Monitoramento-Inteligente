# Usa uma imagem oficial do Node.js baseada no Alpine (leve)
FROM node:18-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas o package.json primeiro (boa prática para otimizar o cache do Docker)
COPY package.json ./

# Instala as dependências (neste caso, o Express)
RUN npm install

# Copia o restante do código da aplicação (o server.js)
COPY . .

# Expõe a porta que configuramos na nossa API
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]