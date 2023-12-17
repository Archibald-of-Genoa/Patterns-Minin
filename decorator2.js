var Server = /** @class */ (function () {
    function Server(ip, port) {
        this.ip = ip;
        this.port = port;
    }
    Object.defineProperty(Server.prototype, "url", {
        get: function () {
            return "https://".concat(this.ip, ":").concat(this.port);
        },
        enumerable: false,
        configurable: true
    });
    return Server;
}());
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
    return server;
}
var s1 = aws(new Server("12.13.14.15", 8080));
var s2 = azure(new Server('13.14.16', 8080));
console.log(s1.isAWS);
console.log(s1.awsInfo());
console.log(s2.isAzure);
console.log(s2.url);
