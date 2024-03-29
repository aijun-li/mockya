import os from 'os';
import path from 'path';
import winston from 'winston';

const homeDir = os.homedir();

export const logFile =
  process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '../../prisma/dev.log')
    : `${homeDir}/.mockya/mockya.log`;

const { combine, timestamp, printf } = winston.format;

const lineFormat = printf(({ level, message, timestamp, reqId }) => {
  if (reqId) {
    return `[${new Date(timestamp).toLocaleString()}][${level}](${reqId}): ${message}`;
  } else {
    return `[${new Date(timestamp).toLocaleString()}][${level}]: ${message}`;
  }
});

const logger = winston.createLogger({
  level: 'debug',
  format: combine(timestamp(), lineFormat),
  transports: [new winston.transports.File({ filename: logFile })],
});

export default logger;
