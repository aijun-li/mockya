import os from 'os';
import winston from 'winston';

const homeDir = os.homedir();

const { combine, timestamp, printf } = winston.format;

const lineFormat = printf(({ level, message, timestamp, reqId }) => {
  return `[${new Date(timestamp).toLocaleString()}][${reqId}][${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), lineFormat),
  transports: [new winston.transports.File({ filename: `${homeDir}/.mockya/mockya.log` })],
});

export default logger;
