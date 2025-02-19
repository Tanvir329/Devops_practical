# Step 1: Use an official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and yarn.lock files into the container
COPY package.json yarn.lock ./

# Step 4: Install dependencies with Yarn
RUN yarn install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React app for production
RUN yarn build || (echo "Build failed" && exit 1) && ls -la /app/dist

# Step 7: Use an official Nginx image to serve the built app
FROM nginx:alpine

# Step 8: Copy the build output from the build stage into the nginx container
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Step 9: Expose port 80 for the web server
EXPOSE 80

# Step 10: Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]

