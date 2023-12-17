class Server {
    ip: string;
    port: number;
    isAWS?: boolean;
    awsInfo?: () => string;
    isAzure?: boolean; // Add isAzure property
  
    constructor(ip: string, port: number) {
      this.ip = ip;
      this.port = port;
    }
  
    get url(): string {
      return `https://${this.ip}:${this.port}`;
    }
  }
  
  interface AWSInfo {
    isAWS: boolean;
    awsInfo: () => string;
  }
  
  function aws(server: Server): Server & AWSInfo {
    server.isAWS = true;
    server.awsInfo = function () {
      return server.url;
    };
    return server as Server & AWSInfo;
  }
  
  function azure(server: Server): Server {
    server.isAzure = true;
    server.port += 500;
    return server;
  }
  
  const s1 = aws(new Server("12.13.14.15", 8080));
  const s2 = azure(new Server('13.14.16', 8080));
  
  console.log(s1.isAWS);
  console.log(s1.awsInfo());
  
  console.log(s2.isAzure);
  console.log(s2.url);
  