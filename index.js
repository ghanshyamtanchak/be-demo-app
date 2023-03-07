const https = require("https");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

console.log(dataObj);

const server = https.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "overview") {
    res.end("This is overview page");
  } else if (pathName === "/product") {
    res.end("This is Product Page");
  } else if (pathName === "/api") {
    res.writeHead(202, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on Port 8000");
});
