FROM node:21.5.0-alpine3.18

WORKDIR /app1

COPY package.json ./

RUN npm install

COPY . .

RUN  npm run build

COPY .next ./.next

CMD ["npm","run", "dev"]