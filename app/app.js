const onigiri = require('onigiri');
const gyoza = require('gyoza');

require('dotenv').config();

const dev = process.env.ENV === 'dev';

const templateConf = {
  basedir: 'app/views',
  cache: true,
};

const strategy = req => true;

const appConf = {
  port: process.env.NODE_PORT,
  host: process.env.NODE_HOST,
  workingDir: 'app',
  strategy: strategy,
  debug: dev ? { trace: true, logs: 'debug' } : {},
  template: gyoza(templateConf)
};

const server = onigiri.Server(appConf);

server.register('response', (req, res) => console.log('Middleware 1 res'));
server.register('response', (res) => addHeader(res));
server.register('response', (req, res) => console.log('Middleware 3 res'));
server.register('request', (req, res) => console.log('Middleware 0 req'));

const addHeader = res => {
  console.log(res);
  return res;
}
