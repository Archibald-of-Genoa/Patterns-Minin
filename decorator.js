class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  };
  return server;
}

function azure(server) {
  server.isAzure = true;
  server.port += 500;
  return server
}

const s1 = aws(new Server("12.13.14.15", 8080));
const s2 = azure(new Server('13.14.16', 8080))

console.log(s1.isAWS);
console.log(s1.awsInfo());

console.log(s2.isAzure);
console.log(s2.url);
