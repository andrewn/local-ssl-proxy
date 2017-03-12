import nomnom from 'nomnom';
import Path from 'path';
import fs from 'fs';
import { name, version } from '../package.json';
import defaults from './defaults';

const exists = path => fs.accessSync(absolutePath(path));
const absolutePath = path => Path.isAbsolute(path) ? path : Path.resolve(process.cwd(), path);

const options = {
  hostname: {
    abbr: 'n',
    default: defaults.hostname,
  },
  source: {
    abbr: 's',
    default: defaults.source,
  },
  target: {
    abbr: 't',
    default: defaults.target,
  },
  cert: {
    abbr: 'c',
    default: defaults.cert,
    callback: exists
  },
  key: {
    abbr: 'k',
    default: defaults.key,
    callback: exists
  },
  config: {
    abbr: 'o',
    callback: exists,
    transform: path => require(absolutePath(path))
  },
  version: {
    abbr: 'v',
    flag: true,
    callback: () => version
  }
};

export default nomnom.script(name).options(options);
