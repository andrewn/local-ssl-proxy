import Path from 'path';

const defaults = {
  hostname: 'localhost',
  source: 9001,
  target: 9000,
  cert: Path.resolve(__dirname, '..', 'resources', 'localhost.cert'),
  key: Path.resolve(__dirname, '..', 'resources', 'localhost.key'),
};

export default defaults;
