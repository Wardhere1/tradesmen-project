# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## DOCKER-Front-End-Container

Trades-Match docker container instructions for the front-end.

After git pull follow the commands below to have the container set-up:

docker build -t react-image . // this builds the image from the docker file in thr client directory

docker images -a // this shows a list

docker run -d -p 3002:3000 --name react-container1 react-image // builds the container from the Image created and specifies the ports(-p) in detached mode (-d) -p(port forwarding traffic localhost machine port : container port) -- name assigns a name to the container being built.

docker ps // this list the container that are running and should list the one just created

docker stop react-container1 // stops the container (name of container)

docker start react-container1 // starts the container (name of container)

## Docker-Server-Container

Trades-Match docker container instructions for the Server.

After git pull follow the commands below to have the container set-up:

docker build -t serverimage . // builds the image from the dockerfile pulled down.

docker images -a // this shows a list of docker images built on your local machine

docker run -p 4000:4000 -d --name Server-containerNew serverimage // builds the container from the Image created and specifies the ports(-p) in detached mode (-d) -p(port forwarding traffic localhost machine port : container port) -- name assigns a name to the container being built.

docker ps // this list the container that are running and should list the one just created

docker stop Server-containerNew // stops the container (name of container)

docker start Server-containerNew // starts the container (name of container)

## Docker-container-for-the-Database

Trades-Match docker container instructions for the Database.

After git pull follow the commands below to have the container set-up:

docker build -t new-postgres-db . // this builds the image from the docker file in thr client directory

docker images -a // this shows a list

docker run -d -p 5432:5432 --name Database-container new-postgres-db // builds the container from the Image created and specifies the ports(-p) in detached mode (-d) -p(port forwarding traffic localhost machine port : container port) -- name assigns a name to the container being built.

docker ps // this list the container that are running and should list the one just created

docker stop Database-container // stops the container (name of container)

docker start Database-container // starts the container (name of container)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
