FROM node:16.14-buster

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
RUN echo $(ls -la node_modules)
COPY . ./
CMD ["yarn", "dev"]