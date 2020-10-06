import express from 'express';

const pctController = express.Router();

pctController.route('/').get(
  (req, res) => {
    res.json({message: "It work's"})
  }
);


/** Pulsar abrir puerta
 * @param puerta number número de puerta
 */


 /** Bloquear/Desbloquear llave
 * @param numeroLlave number número de llave a desactivar
 * @param estado boolean
 */



// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=door_on&securitystate=00100000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00100000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });


// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=Security_OFF&securitystate=00100000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00100000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });

// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=Security_Normal&securitystate=00100000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00100000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });

// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=Security_Normal&securitystate=00100000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00100000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });

// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=door_on&securitystate=00010000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00100000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });


// fetch("http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=door_on&securitystate=00010000", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//     "accept-language": "es-ES,es;q=0.9,en;q=0.8,gl;q=0.7",
//     "authorization": "Basic YWRtaW46YWRtaW4=",
//     "upgrade-insecure-requests": "1",
//     "cookie": "fresh=; remote=00010000"
//   },
//   "referrer": "http://192.168.1.66/Scrt.htm",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors"
// });

// curl 'http://192.168.1.66/' \
//   -H 'Connection: keep-alive' \
//   -H 'Upgrade-Insecure-Requests: 1' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
//   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
//   -H 'Accept-Language: es' \
//   --compressed \
//   --insecure

//   curl 'http://192.168.1.66/status.htm' \
//   -H 'Connection: keep-alive' \
//   -H 'Upgrade-Insecure-Requests: 1' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
//   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
//   -H 'Referer: http://192.168.1.66/' \
//   -H 'Accept-Language: es' \
//   -H 'Cookie: fresh=START' \
//   --compressed \
//   --insecure

//   curl 'http://192.168.1.66/CmdBar.htm' \
//   -H 'Connection: keep-alive' \
//   -H 'Authorization: Basic YWRtaW46YWRtaW4=' \
//   -H 'Upgrade-Insecure-Requests: 1' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
//   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
//   -H 'Referer: http://192.168.1.66/status.htm' \
//   -H 'Accept-Language: es' \
//   -H 'Cookie: fresh=START' \
//   --compressed \
//   --insecure


//   curl 'http://192.168.1.66/clog.htm' \
//   -H 'Connection: keep-alive' \
//   -H 'Authorization: Basic YWRtaW46YWRtaW4=' \
//   -H 'Upgrade-Insecure-Requests: 1' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
//   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
//   -H 'Referer: http://192.168.1.66/CmdBar.htm' \
//   -H 'Accept-Language: es' \
//   -H 'Cookie: fresh=' \
//   --compressed \
//   --insecure

//   curl 'http://192.168.1.66/man.cgi?redirect=scrt.htm&failure=fail.htm&type=Security_Normal&securitystate=00010000' \
//   -H 'Connection: keep-alive' \
//   -H 'Authorization: Basic YWRtaW46YWRtaW4=' \
//   -H 'Upgrade-Insecure-Requests: 1' \
//   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
//   -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
//   -H 'Referer: http://192.168.1.66/Scrt.htm' \
//   -H 'Accept-Language: es' \
//   -H 'Cookie: fresh=; remote=11101111' \
//   --compressed \
//   --insecure
export default pctController;