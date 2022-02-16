require("dotenv").config();
const debug = require("debug")("calculator:server");
const chalk = require("chalk");
const http = require("http");
const url = require("url");
const errorResponse = require("./errorResponse");
const exitProcessMessage = require("./exitProcessMessage");
const operations = require("./operations");
const twoNumbersResponse = require("./twoNumbersResponse");

const server = http.createServer();

const port = process.env.SERVER_PORT || 5173;

server.listen(5173, () => {
  debug(
    chalk.bgBlack.green(
      `Server is up in ${chalk.yellow(`http://localhost:${port}/calculator/`)}`
    )
  );
});

server.on("request", (request, response) => {
  debug(`Request arrived at ${request.url} with method ${request.method}`);
  const { a, b } = url.parse(request.url, true).query;

  const aNumber = parseInt(a);
  const bNumber = parseInt(b);

  if (!isNaN(aNumber) && !isNaN(bNumber)) {
    const results = operations(aNumber, bNumber);
    response.statusCode = 200;
    response.setHeader("Content-type", "text/html");
    response.write(twoNumbersResponse(aNumber, bNumber, results));
  } else {
    response.statusCode = 404;
    response.setHeader("Content-type", "text/html");
    response.write(errorResponse);
  }

  response.end();

  if (isNaN(aNumber) && isNaN(bNumber)) {
    debug(exitProcessMessage);
    process.exit(0);
  }
});

server.on("error", (error) => {
  debug(chalk.red(`Error on server: ${error.message}`));
});
