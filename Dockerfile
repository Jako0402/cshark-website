FROM node:alpine

WORKDIR /app

COPY ./ /app

RUN npm install -g serve

EXPOSE 80

# Run SPA in "single-page" mode
CMD ["serve", "-s", ".", "-l", "80"]
