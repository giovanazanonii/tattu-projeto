# Usa a imagem oficial do Node.js com a versão LTS e base Alpine para ser mais leve
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração do npm para aproveitar o cache do Docker
# Se package.json e package-lock.json não mudarem, as dependências não são reinstaladas
COPY package*.json ./

# Instala as dependências de desenvolvimento e produção
RUN npm install

# Copia todo o código-fonte da aplicação para o container
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build


# Usa uma nova imagem base, novamente Node.js Alpine para um container mínimo
FROM node:18-alpine AS production

# Define o diretório de trabalho
WORKDIR /app

# Copia APENAS os arquivos necessários da etapa de build para a nova imagem
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Copia o package.json novamente para que o comando de start funcione
COPY --from=build /app/package.json ./package.json

# Expor a porta 3000 do container
EXPOSE 3000

# Comando para iniciar a aplicação em modo de produção
CMD [ "node", "dist/main" ]