const errorResponse = `
<body style="background-color:black;font-family:monospace;margin-left:50px">
  <h1 style="color:white;font-size:50px">400</h1>
  <p style="color:#00d0ff;font-size:20px">Error, the server could not understand the request due to invalid syntax. Values must be introduced in the url as <span style="color:#57ff5f">http://localhost:port/calculator/</span><span style="color:#f0e43e">?a=6&b=3</span</p>
</body>`;

module.exports = errorResponse;
