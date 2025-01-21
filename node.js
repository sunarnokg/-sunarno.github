{
    "name"= "ls",
    "version"= "1.0.0",
    "main"= "app.js",
    "scripts"= {
      "start": "node app",
      "test": "echo \"Error: no test specified\" && exit 1"
    }
    "author"= "sunarno",
    "license"= "ISC",
    "description"= ""
  }
  // server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
{
   "access_token"= "accesstoken",
   "expires_in"= "28800",
   "refresh_token"= "r1.refreshme",
   "refresh_token_expires_in"= "15811200",
   "scope"= "",
   "token_type"="bearer"
 }
 POST /login/oauth/access_tokenHTTP/1.1
Host: github.com

grant_type=refresh_token
refresh_token=r1.refreshme
"&client_id" = xxxxxxxxxx
"&client_secret"=xxxxxxxxxx