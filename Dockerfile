FROM node:8
ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 3001

CMD ["npm", "run", "api"]
