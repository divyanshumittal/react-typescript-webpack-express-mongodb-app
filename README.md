If you are not a big fan of CRA (Create React App) like me, then you are in the right place. CRA is good for certain things but it is not a bullet poof solution specially for production level apps and you will need to eject it most of the time. All you get with CRA is a big black box, and I didn't really learn anything about webpack or babel. Hence I decided to spend some time to actually see how much time it would take to setup a React project from scratch. I did some googling on how to get started and what all I would need if I was to setup a project from scratch and the answer was:
**React (Ofcourse), Webpack, Babel, Typescript (Optional), Redux (Optional. Though I would highly recommend the last 2 for production level apps.)**

So I started building my app from scratch, I took some help from this article - https://www.valentinog.com/blog/babel/. It didn't take me long to get this setup done, but then I realized there was no TypeScript. Damn! So I did some more googling, and realized it's not that hard to add Typescript to an existing React project. The cool thing was I didn't need no babel-loader, no .babelrc, no babel configuration anymore as the awesome-typescript-loader takes care of it.

Then I added redux, redux-thunk, react-router, webpack saas-loader (for compiling sass files). I also decided to setup basic reducers, actions, dispatch to actually use redux and redux-thunk in my components. In the end you get a good seed project to start building your apps.

Every application needs a Back-end server to cater to the Front-end application. In this project, I decided to go with express as backend and Mongodb as the database. This configuration completes the Mern app setup.

I am runing mongodb on the port 27017 as a brew service using the following command
brew services start mongodb-community@4.2

To run the front-end app
```
cd client; npm i; npm start
```
To run the back-end app
```
cd server; npm i; npm start
```