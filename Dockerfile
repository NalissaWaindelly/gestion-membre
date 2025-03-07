# Étape 1 : Construction de l'application Angular
FROM node:18 AS build

WORKDIR /asso

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Construire l’application Angular en production
RUN npm run build 

# Étape 2 : Création d’une image minimale avec Nginx
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire Nginx
#COPY --from=build /asso/dist/asso/browser /usr/share/nginx/html
COPY --from=build /asso/dist/asso/browser /usr/share/nginx/html

# Exposer le port 80 pour Nginx
EXPOSE 80

# Lancer Nginx
#CMD ["nginx", "-g", "daemon off;"]
