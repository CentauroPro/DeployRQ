#crear imagen
#instalar el servidor
FROM nginx:1.25.3-alpine

COPY dist /usr/share/nginx/html

#configurar el servidor
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#correr el servidor
CMD [ "nginx", "-g", "daemon off;" ]