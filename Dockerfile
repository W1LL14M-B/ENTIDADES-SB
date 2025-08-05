#Imagen base
FROM node: 22

# Directorio de trabajo
WORKDIR  /app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación al contenedor
COPY . .

# Exponer el puerto en el
EXPOSE 3000

# Comando para iniciar  el servidor
CMD ["node", "index.js"]
