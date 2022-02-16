require("dotenv").config();
const debug = require("debug")("calculator:server");
const chalk = require("chalk");
const http = require("http");

const server = http.createServer();

const port = process.env.SERVER_PORT || 5173;

server.listen(5173, () => {
  debug(
    chalk.bgBlack.green(
      `Server is up in ${chalk.yellow(`http://localhost:${port}`)}`
    )
  );
});

server.on("request", (request, response) => {
  debug(`Request arrived at ${request.url} with method ${request.method}`);
  response.statusCode = 200;
  response.write(
    `<body style="background-color:black" ><h1 style="color:white;">Calculator</h1></body>`
  );
  response.end();
});
