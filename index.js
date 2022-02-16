require("dotenv").config();
const debug = require("debug")("calculator:server");
const chalk = require("chalk");
const http = require("http");
const url = require("url");
const operations = require("./operations");

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
  const { a, b } = url.parse(request.url, true).query;
  const results = operations(a, b);
  response.statusCode = 200;
  response.setHeader("Content-type", "text/html");
  response.write(
    `<body style="background-color:black;font-family:monospace">
      <h1 style="color:white">Calculator</h1>

      <p style="color:#00d0ff;font-size:20px">
        <span style="color:#f0e43e">${a}</span> +
        <span style="color:#fc2b78">${b}</span> =
        <span style="color:#57ff5f">${results.sumResult}</span>
        </p>

      <p style="color:#00d0ff;font-size:20px">
        <span style="color:#f0e43e">${a}</span> +
        <span style="color:#fc2b78">${b}</span> =
        <span style="color:#57ff5f">${results.restResult}</span>
        </p>

      <p style="color:#00d0ff;font-size:20px">
        <span style="color:#f0e43e">${a}</span> +
        <span style="color:#fc2b78">${b}</span> =
        <span style="color:#57ff5f">${results.multiplicationResult}</span>
        </p>

      <p style="color:#00d0ff;font-size:20px">
        <span style="color:#f0e43e">${a}</span> +
        <span style="color:#fc2b78">${b}</span> =
        <span style="color:#57ff5f">${results.divideResult}</span>
        </p>
    </body>`
  );

  response.end();
});

server.on("error", (error) => {
  debug(chalk.red(`Error on server: ${error.message}`));
});
