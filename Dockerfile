FROM node:12

#--- Define workdir.
WORKDIR /workspace/gptsh

#--- Install dependencies.
COPY package.json yarn.lock ./
RUN yarn install

#--- Copy source files and install bin
COPY src ./src
COPY data ./data
COPY Dockerfile ./

#--- Define entrypoint
ENTRYPOINT ["node", "./src/index.js"]