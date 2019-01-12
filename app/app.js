const onigiri = require('onigiri');
const gyoza = require('gyoza');

require('dotenv').config();

const dev = process.env.ENV === 'dev';

const templateConf = {
  basedir: 'app/views',
  cache: true,
};

const strategy = {
  check: (res, req) => {
    console.log(res);
  },
}

const appConf = {
  port: process.env.NODE_PORT,
  host: process.env.NODE_HOST,
  workingDir: 'app',
  strategy: strategy,
  debug: dev ? { trace: true, logs: 'debug' } : {},
  template: gyoza(templateConf)
};

onigiri.Server(appConf);
