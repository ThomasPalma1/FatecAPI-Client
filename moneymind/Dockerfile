FROM node:18
LABEL maintainer="Thomas Palma"
WORKDIR /moneymind/
COPY . /moneymind/
RUN npm install
RUN npm install -g @vue/cli
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
