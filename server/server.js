const express = require("express");
const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV.trim() !== 'production';

//const dev = false; 
console.log(process.env.NODE_ENV);
console.log('dev==', dev);
const app = next({
  dev,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const userRouter = require("./routes/userRoutes");
  server.use("/api/users", userRouter);
  
  // handling everything else with Next.js
  server.get("*", handle);
    const port = process.env.PORT || 3000;process.env.PORT 
  http.createServer(server).listen(port, () => {
    console.log(`listening on port 3000`);
  });
});
