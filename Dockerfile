FROM node:lts
LABEL author="Guilherme Santos <g.santos.sfc@gmail.com>"
LABEL version="1.0.0"
ENV NODE_ENV=production
ENV PORT=3000
COPY . /var/www/calculadora
WORKDIR /var/www/calculadora
RUN npm install
RUN npm audit fix
ENTRYPOINT [ "npm", "start" ]
EXPOSE ${PORT}