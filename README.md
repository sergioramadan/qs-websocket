# qs-websocket
This app is a POC of websockets usage for QS.

# Description
This is a frontend app (client) that allows you select a refresh time, a currency from a list, and a value to convert and show the current amount of bitcoins for that currency and that value. The value gets updated overtime by the number of secconds written in Interval Input.
The backend app (server) gets information from the frontend app via websockets, tracking the connections available, keeping continously emiting updated required values to every connection alive, until the frontend sesion disconects (client's browser leaves the app e.i. browser closes, page refresh or broswer leaves page)

# Used Technologies
Back-end:
- Socket.io
- Express
- Request

Front-end:
- Vue
- Vuex
- Vue-socket.io
- Axios
- SCSS/SASS
- Babel

# Starting the back-end service
Inside ./server directory:
1- Do ```npm install```
2- Run ```$ node index``` or ```$ npm start``` (to start the server using nodemon to keep watching server code changes)

# Starting the front-end service
Inside ./client directory:
1- Do ```npm install```
2- Run ```$ npm run serve```

# Running front-end unit tests
TODO
