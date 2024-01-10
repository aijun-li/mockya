import os from 'os';
import path from 'path';
import winston from 'winston';

const homeDir = os.homedir();
const loggerFile =
  process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '../../prisma/dev.log')
    : `${homeDir}/.mockya/mockya.log`;

const { combine, timestamp, printf } = winston.format;

const lineFormat = printf(({ level, message, timestamp, reqId }) => {
  return `[${new Date(timestamp).toLocaleString()}][${reqId}][${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), lineFormat),
  transports: [new winston.transports.File({ filename: loggerFile })],
});

export default logger;
