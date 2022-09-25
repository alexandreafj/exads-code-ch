import http from "http";
import { EncondingController } from './controller/enconding.controller';

const port = Number(process.env.PORT) || 8080;

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.method == "GET" && req.url === "/") {
    res.write('Hello World!')
    res.end()
  }

  if (req.method == "POST" && req.url === "/") {
    const encondingController = new EncondingController(req, res);
    return encondingController.encodingMessage();
  }

  return res.end();
}

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on port ${port}. Go to http://localhost:${port}/`);
});

process.on('uncaughtException', (error, origin) => {
  console.log(`\n${origin} signal received. \n${error}`);
});

process.on('unhandledRejection', (error) => {
  console.log(`signal received \n${error}`);
});

const gracefullShutdown = (event) => {
  return (code: any) => {
    console.log(`${event} received with ${code}`);
    server.close();
    process.exit(code);
  };
};

process.on('SIGINT', gracefullShutdown('SIGINT'));

process.on('SIGTERM', gracefullShutdown('SIGTERM'));

process.on('exit', (code) => {
  console.log('exit signal received ', code);
});