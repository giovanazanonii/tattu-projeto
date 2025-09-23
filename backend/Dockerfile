# Usa uma imagem oficial do Node.js, versão 22, otimizada e leve.
FROM node:22-alpine

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de dependência.
COPY package*.json ./

# Instala todas as dependências do projeto.
RUN npm install

# Copia todo o código-fonte da aplicação para o contêiner.
COPY . .

# Expõe a porta que o seu servidor Express vai usar.
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for executado.
CMD ["npm", "start"]