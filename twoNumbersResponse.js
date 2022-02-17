const twoNumbersResponse = (a, b, results) => `
<body style="background-color:black;font-family:monospace;font-size:30px;margin-left:50px">
  <h1 style="color:white">Calculator</h1>

  <p style="color:#00d0ff;font-size:25px">
    <span style="color:#f0e43e">${a}</span> +
    <span style="color:#fc2b78">${b}</span> =
    <span style="color:#57ff5f">${results.sumResult}</span>
    </p>

  <p style="color:#00d0ff;font-size:25px">
    <span style="color:#f0e43e">${a}</span> -
    <span style="color:#fc2b78">${b}</span> =
    <span style="color:#57ff5f">${results.restResult}</span>
    </p>

  <p style="color:#00d0ff;font-size:25px">
    <span style="color:#f0e43e">${a}</span> *
    <span style="color:#fc2b78">${b}</span> =
    <span style="color:#57ff5f">${results.multiplicationResult}</span>
    </p>

  <p style="color:#00d0ff;font-size:25px">
    <span style="color:#f0e43e">${a}</span> /
    <span style="color:#fc2b78">${b}</span> =
    <span style="color:#57ff5f">${results.divideResult}</span>
    </p>
</body>`;

module.exports = twoNumbersResponse;
