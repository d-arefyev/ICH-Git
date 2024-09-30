import fs from "fs";

function logMessage(message) {
  const timestamp = new Date().toISOString();
  const log = `${timestamp} - ${message}\n`;
  
  // Add logs to file
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Log writing error:', err);
    }
  });
}

export default logMessage;
