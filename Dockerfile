FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
# # Fetching the latest node image on apline linux
# FROM node:alpine AS builder

# # Declaring env
# ENV NODE_ENV production

# # Setting up the work directory
# WORKDIR /app

# # Installing dependencies
# COPY ./package.json ./
# RUN npm install

# # Copying all the files in our project
# COPY . .

# # Building our application
# RUN npm run build

# # Fetching the latest nginx image
# FROM nginx

# # Copying built assets from builder
# COPY --from=builder /app/build /usr/share/nginx/html

# # Copying our nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf