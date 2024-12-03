const http = require("http");
const app = require("./app");

app.set('port',3000);

const server = http.createServer(app);
server.on("listening",() => {
    console.log("listen on port 3000");
})
server.listen(3000);