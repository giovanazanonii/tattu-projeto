
# Usa uma imagem oficial do Node.js 22
FROM node:22-alpine AS build

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Copia os arquivos de dependências (package.json e package-lock.json).
COPY package*.json ./

# Instala todas as dependências, incluindo as do Angular e do Tailwind.
RUN npm install

# Copia todo o código-fonte da sua aplicação para o contêiner.
COPY . .

# Constrói a aplicação Angular em modo de produção.
# Isso vai gerar a pasta com todos os arquivos estáticos (HTML, CSS, JS).
RUN npm run build

# --- Servidor Web (Servir a aplicação) ---
# Usa uma imagem leve e otimizada do Nginx.
FROM nginx:alpine

# Remove o arquivo de configuração padrão do Nginx.
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração personalizado.
COPY nginx.conf /etc/nginx/conf.d

# Copia os arquivos compilados (da etapa anterior) para o diretório padrão do Nginx.
# A pasta `dist/<nome_da_pasta_do_seu_projeto>` é onde o Angular salva os arquivos finais.
COPY --from=build /app/dist/meu-projeto/browser /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx.
EXPOSE 80