# Usar Node.js como base
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json package-lock.json ./

RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del servicio
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]

